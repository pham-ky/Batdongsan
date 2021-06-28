import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';
import { DiaChiService } from 'src/app/lib/diachi.service';
import { LoaiHTService } from 'src/app/lib/loai-ht.service';
import { PostService } from 'src/app/lib/post.service';

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

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent extends BaseComponent implements OnInit {

  Huong: any;
  list: any;
  page: any;
  totalItems: any;
  item_group_id: any;
  constructor(private activatedRoute: ActivatedRoute,
    private _postService: PostService,
    private _DCService: DiaChiService,
    private _LoaiHTSevice: LoaiHTService,
    private injector: Injector) {
    super(injector);

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
  }

  ngAfterViewInit() {
    this.loadScripts();
  }

  TinhTP: TinhTP[] | any;
  QH: QH[] | any;
  XP: XP[] | any;

  selectedTinhTP: TinhTP | any;
  selectedQH: QH | any;
  selectedXP: XP | any;
  selectedHuongNha: any;
  HinhThuc: any;
  selectedHT: any;
  LoaiBds: any;
  selectedLoaiBds: any;
  rangeValues: number[] = [100, 500];
  min: any;
  max: any;
  title = "Danh sách bài đăng";

  ngOnInit(): void {
    // this.selectedHuongNha = "KXĐ";

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
    // this.selectedHT = "";
    // this.selectedLoaiBds = "";
    // this.selectedTinhTP = "";
    // this.selectedQH = "";
    // this.selectedXP = "";
    // this.selectedHuongNha = "";
    this.min = this.rangeValues[0];
    this.max = this.rangeValues[1];


    this.list = [];
    this.page = 1;

    this._route.params.subscribe(params => {
      this.item_group_id = params['id'];
      this._postService.postlist('/GetPosts', { page: this.page, item_group_id: this.item_group_id })
        .subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;

        }, err => { });
    });
  }
  loadPage(page: any) {

    
    this.selectedHT = this.selectedHT != undefined ? this.selectedHT : "";
    this.selectedLoaiBds = this.selectedLoaiBds != undefined ? this.selectedLoaiBds : "";
    this.selectedTinhTP = this.selectedTinhTP != undefined ? this.selectedTinhTP : "";
    this.selectedQH = this.selectedQH != undefined ? this.selectedQH : "";
    this.selectedXP = this.selectedXP != undefined ? this.selectedXP : "";
    this.selectedHuongNha = this.selectedHuongNha != undefined ? this.selectedHuongNha : "";
    var loai: any;
    var hinhthuc: any;
    var ht: any;
    var tinh: any;
    var huyen: any;
    var xa: any;
    var huongnha: any;
    loai = this.selectedLoaiBds.maLoaiBds != undefined ? this.selectedLoaiBds.maLoaiBds : "";
    this._route.params.subscribe(params => { ht = params["id"] });
    hinhthuc = this.selectedHT.maHinhThuc != undefined ? this.selectedHT.maHinhThuc : ht;
    
    tinh = this.selectedTinhTP.maTp != undefined ? this.selectedTinhTP.maTp : "";
    huyen = this.selectedQH.maQh != undefined ? this.selectedQH.maQh : "";
    xa = this.selectedXP.maXp != undefined ? this.selectedXP.maXp : "";
    huongnha = this.selectedHuongNha.huong != undefined ? this.selectedHuongNha.huong : "";
    this.min = this.rangeValues[0];
    this.max = this.rangeValues[1];
    console.log(this.page, loai, hinhthuc, tinh, huyen, xa, huongnha, this.min, this.max);

    this._route.params.subscribe(params => {
      this._postService.postlist('/Search', {
        page: this.page, LoaiBds: loai, HinhThuc: hinhthuc,
        Tinh: tinh, Huyen: huyen, Xa: xa, Huong: huongnha, min: this.min, max: this.max
      })
        .subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;
        }, err => { });
    });

    // this._route.params.subscribe(params => {
    //   let id = params['id'];
    //   this._postService.postlist('/GetPosts', { page: this.page, item_group_id: this.item_group_id })
    //     .subscribe(res => {
    //       this.list = res.data;
    //       this.totalItems = res.totalItems;
    //     }, err => { });
    // });
  }

  search() {
    this.selectedHT = this.selectedHT != undefined ? this.selectedHT : "";
    this.selectedLoaiBds = this.selectedLoaiBds != undefined ? this.selectedLoaiBds : "";
    this.selectedTinhTP = this.selectedTinhTP != undefined ? this.selectedTinhTP : "";
    this.selectedQH = this.selectedQH != undefined ? this.selectedQH : "";
    this.selectedXP = this.selectedXP != undefined ? this.selectedXP : "";
    this.selectedHuongNha = this.selectedHuongNha != undefined ? this.selectedHuongNha : "";
    var loai: any;
    var hinhthuc: any;
    var ht: any;
    var tinh: any;
    var huyen: any;
    var xa: any;
    var huongnha: any;
    loai = this.selectedLoaiBds.maLoaiBds != undefined ? this.selectedLoaiBds.maLoaiBds : "";
    this._route.params.subscribe(params => { ht = params["id"] });
    hinhthuc = this.selectedHT.maHinhThuc != undefined ? this.selectedHT.maHinhThuc : ht;
    tinh = this.selectedTinhTP.maTp != undefined ? this.selectedTinhTP.maTp : "";
    huyen = this.selectedQH.maQh != undefined ? this.selectedQH.maQh : "";
    xa = this.selectedXP.maXp != undefined ? this.selectedXP.maXp : "";
    huongnha = this.selectedHuongNha.huong != undefined ? this.selectedHuongNha.huong : "";
    this.min = this.rangeValues[0];
    this.max = this.rangeValues[1];
    console.log(this.page, loai, hinhthuc, tinh, huyen, xa, huongnha, this.min, this.max);

    this.page = 1;
    this._route.params.subscribe(params => {
      this._postService.postlist('/Search', {
        page: this.page, LoaiBds: loai, HinhThuc: hinhthuc,
        Tinh: tinh, Huyen: huyen, Xa: xa, Huong: huongnha, min: this.min, max: this.max
      })
        .subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;
        }, err => { });
    });
  }


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

  selectLoai() {
    this._LoaiHTSevice
      .GetLoai(this.selectedHT.maHinhThuc)
      .pipe(first())
      .subscribe((res) => {
        this.LoaiBds = res;
      });
  }

}
