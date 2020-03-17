/*
* 定数定義クラス
* システム定数
*/

export class Const {
  //バックエンド接続URL
  //開発機
  static readonly WWW_ROOT: string = 'http://192.168.1.11:8080/Ukewatashi/ws/';
  //開発機kkgreat.testのhosts設定PCのみアクセス化
  //static readonly WWW_ROOT: string = 'https://kkgreat.test:8181/Ukewatashi/ws/'; 
  //検証機
  //static readonly WWW_ROOT: string = 'http://153.127.8.105:8080/Ukewatashi/ws/';
  //static readonly WWW_ROOT: string = 'https://kkgreat-help.com:8181/Ukewatashi/ws/';
  

  // 権限レベル
  static readonly KENGEN_ALL: number = 0;                     // 管理者
  static readonly KENGEN_MANAGER: number = 1;                 // 所属長
  static readonly KENGEN_NORMAL: number = 2;                  // 一般

  // 会社名
  static readonly JLX_HOKEN: string = '株式会社JALUX保険部';
  static readonly JLX_HS_HOKEN: string = '株式会社JALUX保険サービス';

  // 書類STATUS 全件(-1~3)
  static readonly STATUS_DLVRY: number = -1;                  // 郵送 （郵送）
  static readonly STATUS_NOT_CHECK: number = 0;               // 書類受渡前（未確認分すべて)
  static readonly STATUS_CHECK: number = 1;                   // 保険会社確認済・確認印刷前 (確認完了分)
  static readonly STATUS_END: number = 2;                     // 保険会社確認済・確認印刷済 (確認完了分)
  static readonly STATUS_NG: number = 3;                      // 書類不備（未確認分すべて) (書類不備)

  // 承認STATUS
  static readonly APP_STATUS_NOT: number = 0;                 // 未承認
  static readonly APP_STATUS_OK: number = 10;                 // 承認済

  // メイン画面の検索条件選択リスト用
  static readonly SELECT_DETAILS: SelectDetail = {
    id: '管理No.',
    sakuseibi: '作成日',
    hokengaisha: '保険会社',
    hokenTantou: '保険担当者',
    shoukenbango: '証券番号',
    keiyakusha: '契約者名',
    kubun: '区分',
    tantousha: '入力担当者',
    shinseisha: '申請者',
  };

  // 受渡方法
  static readonly DLVRY_HANDING: string = '受渡';
  static readonly DLVRY_MAIL: string = '郵送';

  // 書類OK/NG
  static readonly SHORUI_OK: number = 0;
  // static readonly SHORUI_NG: number = 1; 未確認

  // 添付書類 有/無
  static readonly SHORUI_NO: number = 0;
  static readonly SHORUI_YES: number = 1;

  // 生保分 有/無
  static readonly SEIHO_NO: number = 0;
  static readonly SEIHO_YES: number = 1;

}

// 検索条件選択リストインターフェイス
interface SelectDetail {
    [index: string]: string;
}

