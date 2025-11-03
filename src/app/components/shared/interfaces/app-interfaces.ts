export type PositionKey =
  | 'left'
  | 'center'
  | 'right'
  | 'top'
  | 'bottom';

export type Position =
  | `${PositionKey}`
  | `${PositionKey} ${PositionKey}`
  | `${number}%`
  | `${number}% ${number}%`
  | `${PositionKey} ${number}%`
  | `${number}% ${PositionKey}`;


  export type Transform =
  | `scale(${number})`
  | `scale(${number}, ${number})`
  | `translate(${string})`
  | `translate(${string}, ${string})`
  | `rotate(${string})`
  | string; // para permitir combinaciones como "scale(1.2) translateX(-10%)"

export type TransformOrigin =
  | Position
  | `${number}px`
  | `${number}% ${number}%`
  | `${number}%`
  | string;


  // Unidades de CSS permitidas
export type CSSUnit = 'px' | '%' | 'rem' | 'em' | 'vh' | 'vw';

// String con número + unidad
export type UnitString = `${number}${CSSUnit}`;

export type HexColor = `#${string}`;
