import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AcaraService } from '../providers/acara.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab2Page {

  dataAcara: any = this.resetForm();

  constructor(
    private acaraService: AcaraService,
    private alertCtrl: AlertController
  ) {}

  resetForm() {
    return {
      nama_acara: '',
      penanggung_jawab: '',
      tempat: '',
      tanggal: '',
      waktu: '',
      keterangan: ''
    };
  }

  async simpan() {
    this.acaraService.simpanAcara(this.dataAcara).subscribe({
      next: async (res) => {
        if (res.status) {
          const alert = await this.alertCtrl.create({
            header: 'Berhasil',
            message: res.message,
            buttons: ['OK']
          });
          await alert.present();

          // ✅ CLEAR FORM
          this.dataAcara = this.resetForm();
        }
      },
      error: async () => {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Gagal mengirim data',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
