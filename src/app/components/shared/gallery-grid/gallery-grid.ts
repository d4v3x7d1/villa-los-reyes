import { Component, HostListener, input, signal, OnInit, effect } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UnitString } from '../interfaces/app-interfaces';


export interface ResponsiveConfig {
  /** Ancho máximo al que se aplica este tamaño */
  maxWidth: number;
  mainHeight: UnitString;
  thumbHeight: UnitString;
}

@Component({
  selector: 'gallery-grid',
  templateUrl: './gallery-grid.html',
  styleUrl: './gallery-grid.css',
  imports: [TranslatePipe],
})
export class GalleryGrid implements OnInit {
  // === Inputs obligatorios ===
  mainImage = input.required<{ src: string; alt: string }>();
  thumbImages = input<{ src: string; alt: string }[]>();

  /**
   * Configuración responsive (lista de puntos de quiebre)
   * Ejemplo: [{ maxWidth: 600, mainHeight: '20vh', thumbHeight: '8vh' }]
   */
  responsiveConfig = input<ResponsiveConfig[]>([
    { maxWidth: 600, mainHeight: '10rem', thumbHeight: '5rem' },
  ]);

  /**
   * Alturas por defecto cuando no se cumple ningún breakpoint.
   * Pueden ser sobrescritas si el padre lo decide.
   */
  defaultMainHeight = input<UnitString>('45vh');
  defaultThumbHeight = input<UnitString>('24vh');

  // === Señales internas ===
  mainHeight = signal<UnitString>('45vh');
  thumbHeight = signal<UnitString>('24vh');

  // ===============================
  //   🔹 Lógica responsiva
  // ===============================

  private updateHeights(width: number) {
    // Busca la primera configuración cuyo maxWidth sea >= al ancho actual
    const config = this.responsiveConfig()
      .sort((a, b) => a.maxWidth - b.maxWidth)
      .find(cfg => width <= cfg.maxWidth);

    if (config) {
      // Aplica tamaños definidos por el breakpoint
      this.mainHeight.set(config.mainHeight);
      this.thumbHeight.set(config.thumbHeight);
    } else {
      // Si no hay coincidencia, usa valores por defecto
      this.mainHeight.set(this.defaultMainHeight());
      this.thumbHeight.set(this.defaultThumbHeight());
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateHeights(window.innerWidth);
  }

  ngOnInit() {
    // Inicializa con el tamaño actual
    this.updateHeights(window.innerWidth);
  }

  // 🔄 Efecto reactivo por si el padre cambia las configuraciones
  // constructor() {
  //   effect(() => {
  //     // Reactualiza si cambian los inputs
  //     this.updateHeights(window.innerWidth);
  //   });
  // }
}

