import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
// import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { DiaChiService } from 'src/app/lib/diachi.service';
import { LoaiHTService } from 'src/app/lib/loai-ht.service';
import { UserService } from 'src/app/lib/user.service';
import { PostService } from 'src/app/lib/post.service';
import { Router } from '@angular/router';

declare let alertify: any;

interface TinhTP {
  maTp: string,
  ten: string,
  kieu: string
}

interface QH {
  maQh: string,
  ten: string,
  kieu: string,
  maTp: string
}

interface XP {
  maXp: string,
  ten: string,
  kieu: string,
  maQh: string
}

interface Loaitin {
  ten: string,
  code: number
}
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [MessageService]
})
export class AddPostComponent implements OnInit {

  mindateS: any;
  mindateE: any;
  Donviban: any;
  Donvithue: any;
  Huong: any;
  Loaitin: any;
  uploadedFiles: any[] = [];
  constructor(private _DCService: DiaChiService,
    private _LoaiHTSevice: LoaiHTService,
    private _user: UserService,
    private _post: PostService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.Donviban = [
      { tendonvi: 'Thỏa thuận' },
      { tendonvi: 'Triệu' },
      { tendonvi: 'Tỷ' },
      { tendonvi: 'Trăm nghìn/m2' },
      { tendonvi: 'Triệu/m2' },
    ];
    this.Donvithue = [
      { tendonvi: 'Thỏa thuận' },
      { tendonvi: 'Trăm nghìn/tháng' },
      { tendonvi: 'Triệu/tháng' },
      { tendonvi: 'Trăm nghìn/m2/tháng' },
      { tendonvi: 'Triệu/m2/tháng' },
      { tendonvi: 'Nghìn/m2/tháng' },
    ];
    this.Huong = [
      { huong: 'KXĐ' },
      { huong: 'Đông' },
      { huong: 'Tây' },
      { huong: 'Nam' },
      { huong: 'Bắc' },
      { huong: 'Đông-Bắc' },
      { huong: 'Tây-Bắc' },
      { huong: 'Tây-Nam' },
      { huong: 'Đông-Nam' },
    ];
    this.Loaitin = [
      { ten: 'Tin thường', code: '0' },
      { ten: 'Tin vip', code: '1' }
    ]
  }

  TinhTP: TinhTP[] | any;
  QH: QH[] | any;
  XP: XP[] | any;

  selectedTinhTP: TinhTP | any;
  selectedQH: QH | any;
  selectedXP: XP | any;

  HinhThuc: any;
  selectedHT: any;
  LoaiBDS: any;
  selectedLoai: any;

  Donvi: any;
  selectedDv: any;

  mota: any;
  motanoithat: any;
  ttphaply: any;

  selectedHuongNha: any;
  selectedHuongBC: any;
  selectedLoaitin: Loaitin | any;

  dateE: Date | any;
  dateS: Date | any;
  numday: any;
  price: any;
  dongia: any;
  user: any;
  diachi: any;
  dientich: any;
  gia: any;
  tieude: any;
  sophongngu: any;
  sophongtam: any;
  sophongwc: any;
  sotang: any;
  tenlh: any;
  dclh: any;
  sdt: any;
  email: any;
  priceV: any;
  testPrice: any;
  ngOnInit(): void {

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.mindateE = new Date();
    this.mindateE.setMonth(nextMonth);
    this.mindateE.setYear(nextYear);
    this.mindateS = today;
    this.dateS = this.mindateS;
    this.dateE = this.mindateE;
    this.numday = 30;

    this.selectedLoaitin = { ten: 'Tin thường', code: '0' };
    this.price = 3000 * this.numday;
    this.priceV = this.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    this.dongia = '3 nghìn đồng/Ngày';

    this.selectedHuongNha = "KXĐ";
    this.selectedHuongBC = "KXĐ";
    this._user.user$.subscribe((res) => {
      this.user = res;

    })
    if (this.user.soDuTk < this.price) {
      this.testPrice = 1;
    }

    this.tenlh=this.user.hoTen;
    this.dclh=this.user.diaChi;
    this.sdt=this.user.sdt;
    this.email=this.user.email;

    this._DCService
      .GetTinhTP()
      .pipe(first())
      .subscribe((res) => {
        this.TinhTP = res;
      });

    this._LoaiHTSevice
      .GetHT()
      .pipe(first())
      .subscribe((res) => {
        this.HinhThuc = res;
      });

  }

  getdateE() {
    this.mindateE = new Date();
    let day = this.dateS.getDate();
    let month = this.dateS.getMonth();
    let year = this.dateS.getFullYear();
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.mindateE.setDate(day);
    this.mindateE.setMonth(nextMonth);
    this.mindateE.setYear(nextYear);
    this.dateE = this.mindateE;

    if (this.selectedLoaitin.code == 0) {
      this.price = 3000 * this.numday;
      this.priceV = this.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    if (this.selectedLoaitin.code == 1) {
      this.price = 20000 * this.numday;
      this.priceV = this.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
  }
  getNumday() {
    this.numday = (this.dateE.getTime() - this.dateS.getTime()) / (24 * 3600 * 1000);
    if (this.numday > 30)
      this.numday = parseInt(this.numday.toFixed(0)) + 1;
    if (this.selectedLoaitin.code == 0) {
      this.price = 3000 * this.numday;
      this.priceV = this.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    if (this.selectedLoaitin.code == 1) {
      this.price = 20000 * this.numday;
      this.priceV = this.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
  };

  selectLT() {
    if (this.selectedLoaitin.code == 0) {
      this.dongia = '3 nghìn đồng/Ngày';
      this.price = 3000 * this.numday;
      this.priceV = this.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    if (this.selectedLoaitin.code == 1) {
      this.dongia = '20 nghìn đồng/Ngày';
      this.price = 20000 * this.numday;
      this.priceV = this.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
  };

  selectQH() {
    this._DCService
      .GetQH(this.selectedTinhTP.maTp)
      .pipe(first())
      .subscribe((res) => {
        this.QH = res;
      });

  }

  selectXP() {
    this._DCService
      .GetXP(this.selectedQH.maQh)
      .pipe(first())
      .subscribe((res) => {
        this.XP = res;
      });
  }

  getDiaChi(){
    this.diachi = this.selectedXP.ten + ', ' + this.selectedQH.ten + ', ' + this.selectedTinhTP.ten;
  }

  selectLoai() {
    this._LoaiHTSevice
      .GetLoai(this.selectedHT.maHinhThuc)
      .pipe(first())
      .subscribe((res) => {
        this.LoaiBDS = res;
      });
    if (this.selectedHT.maHinhThuc == 1) {
      this.Donvi = this.Donviban;
    }
    if (this.selectedHT.maHinhThuc == 2) {
      this.Donvi = this.Donvithue;
    }
  }

  onAdd(): void {
    var post = {
      MaHinhThuc: this.selectedHT.maHinhThuc,
      MaLoaiBds: this.selectedLoai.maLoaiBds,
      MaXp: this.selectedXP.maXp,
      MaTk: this.user.maTk,
      DiaChiChiTiet: this.diachi != null ? this.diachi : '',
      TieuDe: this.tieude,
      MoTa: this.mota,
      DienTich: this.dientich,
      MucGia: this.gia,
      DonViGia: this.selectedDv.tendonvi,
      HuongNha: this.selectedHuongNha.huong != null ? this.selectedHuongNha.huong : '',
      HuongBanCong: this.selectedHuongBC.huong != null ? this.selectedHuongBC.huong : '',
      SoPhongNgu: this.sophongngu != null ? this.sophongngu : '',
      SoPhongTam: this.sophongtam != null ? this.sophongtam : '',
      SoPhongWc: this.sophongwc != null ? this.sophongwc : '',
      SoTang: this.sotang != null ? this.sotang : '',
      GiayToPhapLy: this.ttphaply != null ? this.ttphaply : '',
      MoTaNoiThat: this.motanoithat != null ? this.motanoithat : '',
      TenLienHe: this.tenlh,
      DiaChiLienHe: this.dclh,
      Sdt: this.sdt,
      Email: this.email,
      NgayBatDau: this.dateS,
      NgayKetThuc: this.dateE,
      LoaiBaiDang: this.selectedLoaitin.code,
      ThanhTien: this.price,
    }
    this._post
      .addProduct(post)
      .pipe(first())
      .subscribe({
        next: (res) => {
          if (res > 0) {
            alertify.success("Đăng bài thành công!");
            setTimeout(() => {
              this.router.navigateByUrl('/home');
            }, 800);
          }
        },
        error: (err) => {
          console.log(err);
          alertify.error("Đã có lỗi");
        },
      });

  }

}
