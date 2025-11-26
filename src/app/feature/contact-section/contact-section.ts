import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSectionComponent {
  
  formData = {
    name: '',
    message: '',
  };

  handleWhatsApp() {
    if (!this.formData.name || !this.formData.message) {
      alert('Por favor completa todos los campos');
      return;
    }

    const message = encodeURIComponent(
      `Hola, mi nombre es ${this.formData.name}.\n\n${this.formData.message}`
    );

    const whatsappUrl = `https://wa.me/573112345678?text=${message}`;
    window.open(whatsappUrl, '_blank');

    this.formData = { name: '', message: '' };
  }
}
