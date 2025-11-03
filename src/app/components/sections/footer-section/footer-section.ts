import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'footer-section',
  imports: [RouterLink],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css'
})
export class FooterSection {
  currentYear = new Date().getFullYear();

  private whatsappNumber = '5352741734'; // número actualizado
   copiedNumber: string | null = null;

  openWhatsApp() {
    const message = encodeURIComponent('¡Hola!. Me gustaría recibir más información sobre las opciones de alojamiento y los servicios disponibles en Villa Los Reyes');
    const url = `https://wa.me/${this.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  }


  copyNumber(number: string) {
    navigator.clipboard.writeText(number)
      .then(() => {
        this.copiedNumber = number;
        // El tooltip desaparece después de 1.5 segundos
        setTimeout(() => this.copiedNumber = null, 1500);
      })
      .catch(err => console.error('Error al copiar:', err));
  }
}

