import {svg} from 'lit';
import {color} from '../css/colors';
import {hoverClasses} from '../css/hoverClasses';

export const crossIcon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 ${hoverClasses}">
<path d="M6 6L18 18" stroke=${color(
  'text-secondary'
)} stroke-width="1.5" stroke-linecap="round"/>
<path d="M18 6L6.00001 18" stroke=${color(
  'text-secondary'
)} stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;
