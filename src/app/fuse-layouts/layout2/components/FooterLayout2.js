import React from 'react';
import { Typography, AppBar, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { ThemeProvider } from '@material-ui/styles';

// const PrivacyDB = [
//   {
//     id: '1',
//     title: '隱私權政策',
//     content:
//       '<p>親愛的朋友，青年職涯發展中心(以下宣稱為本網站)承諾尊重並保護您個人的隱私權，為了幫助您瞭解我們將如何蒐集、應用及保護您所提供的個人資訊，本網站謹以下列聲明，對外說明我們的隱私權保護政策( Privacy Policy )。以下內容將告訴您，本網站在網站內所蒐集的資料、運用方式，以及查詢或更正的方法等事項。&nbsp;</p><p><br></p><section><h2>1. 本網站從何處蒐集我的個人資料？</h2><p>原則上，使用者進入本網站網站時，並不需要輸入個人資料，除非明確告知，本網站不會在使用者不知情的情況下，取得使用者個人資料；本網站從網站蒐集個人資料的管道說明如下：</p><ul><li><h3>加入會員及登錄「生涯紀錄表」或履歷</h3><p>您加入會員及填寫完「生涯紀錄表」時，即成為本網站會員，您加入會員及填寫完「生涯紀錄表」時，即成為本網站會員，本網站將會從會員資料及「生涯紀錄表」中獲得您的個人資訊，包括姓名、電子信箱、生日、性別、住址、電話、職業和其他相關資料。您填寫的資料愈詳細，我們愈能提供您相關資訊及所需求的工作機會。成為會員後，您將獲得一個本網站會員帳號，並可由該帳號充分使用本網站提供的所有會員服務。包括姓名、電子信箱、生日、性別、住址、電話、職業和其他相關資料。您填寫的資料愈詳細，我們愈能提供您相關資訊及所需求的工作機會。成為會員後，您將獲得一個本網站會員帳號，並可由該帳號充分使用本網站提供的所有會員服務。</p></li><li><h3>線上活動及網路調查</h3><p>當您參與本網站線上活動或網路調查時，本網站會請您提供姓名、身份證字號、電話、電子信箱及住址等資料（地址是在本網站要寄送贈品給您時，要求您填寫的欄位）。</p></li><li><h3>職缺或廣告刊登</h3><p>請您注意，在本網站刊登職缺之廠商，或與本網站連結的網站，也可能蒐集您個人的資料。對於您主動提供的個人資訊，這些職缺廠商、廣告廠商、或連結網站有其個別的隱私權保護政策，其資料處理措施不適用本網站隱私權保護政策，本網站不負任何連帶責任。</p></li><li><h3>線上付款</h3><p>當您透過本網站網站進行適性測驗或預約諮商或線上報名課程，為了信用卡付費機制的需要，本網站r將會蒐集您主動提供的付款人資料（如姓名、電子郵件、地址、郵遞區號、電話、生日、性別、職業和個人興趣等）及付款資料（如信用卡號碼、信用卡有效期限、或銀行轉帳號碼等）等相關資訊。</p></li><li><h3>一般瀏覽</h3><p>除了上述，本網站會記錄使用者上站的位址、以及在本網站網站內的瀏覽活動等資料，但是這些資料僅供作流量分析和網路行為調查，以便於改善本網站網站的服務品質，這些資料也只是總量上的分析，不會和特定個人相連繫。 其他除了您主動登錄會員、訂閱電子報提供的個人資料之外，您也可能在本網站網站中的討論區或其他互動網頁，主動提供個人資料如電子郵件，姓名等。這種形式的資料提供，不在本網站隱私權保護政策的範圍之內。</p></li></ul><p>（此外，如果您寫信與本網站聯繫，或是透過管道向客服中心反應您的意見，本網站會保存您的通訊記錄。另外，本網站也將不定期邀請使用者完成本網站用來進行內部研究的調查資料。）</p></section><hr><section><h2>2. 本網站如何使用我的資料？</h2><p>本網站所取得的個人資料，都僅供本網站於其內部、依照原來所說明的使用目的和範圍加以運用，除非事先說明、或依照相關法律規定，否則本網站不會將使用者個人資料提供給第三人、或移作其他目的使用。</p><ul><li><h3>登錄「生涯紀錄表」</h3><p>主要用於提供媒合服務。本網站從「生涯紀錄表」所蒐集的個人資料，除了使媒合的結果更加精確，並提供求才廠商，對其需要的人才有更詳細的了解，達到適才適所。另外，能更精確的提供給求職者所需的職缺資訊。</p></li><li><h3>訂閱電子報</h3><p>本網站從訂閱電子報中所取得之個人資料（如姓名、電子信箱），主要作為電子報的寄發所需，及其他必要性的訂戶資料分析。</p></li><li><h3>線上活動及網路調查</h3><p>本網站所蒐集的活動參與者或受訪者姓名、身份證字號，僅供抽獎活動依據。電話、Email及住址等資訊，則作為通知受訪者抽獎結果，及分析之用，並不做其他用途。其他資料僅止於商業及市場分析或學術用途；除非受訪者同意，所有資料僅供資料分析之用，本網站不會將資訊用做其他用途。</p></li><li><h3>線上付款</h3><p>付款人資料、付款資料僅用於約定您支付該筆購物之款項。</p></li><li><h3>統計與分析</h3><p>當您在本網站主動成為會員後，其所輸入的資料，僅供本網站依服務或活動設計參考使用。凡未經您主動註冊所產生的資料，例如使用者機器的IP位址、使用時間、使用的瀏覽器、瀏覽及點選紀錄等資料，本網站僅對全體使用者行為總和進行分析，並不會對個別使用者進行分析。</p></li></ul></section><hr><section><h2>3. 對於資料的蒐集、使用上，您可以有哪些選擇？</h2><p>本網站將經常寄送關於職場資訊和服務的電子郵件給您。除了在該資料或電子郵件上註明是由本網站發送，也會在該資料或電子郵件上提供您能隨時停止接收這些資料或電子郵件的方法、說明或功能連結。在任何時候都可以方便地修改本網站會員資料，以拒絕再接收這類資料和郵件。您需要輸入您的本網站 帳號和密碼以讀取您的會員資料。</p><p>當您連上本網站並輸入個人資料時，除了我們另作特別聲明外，您只與本網站共享資料。若您的「生涯紀錄表」維持在開啟並設定要媒合的狀態，則您的資料將會透過本網站提供給贊助的求才廠商，本網站不會將使用者資料出售或出租給任何人。</p></section><hr><section><h2>4. 如何讀取、更新和刪除您的資料？</h2><p>本網站所取得的個人資料，都僅供本網站於其內部、依照原來所說明的使用目的和範圍加以運用，除非事先說明、或依照相關法律規定，否則本網站不會將使用者個人資料提供給第三人、或移作其他目的使用。</p><ul><li><h3>「生涯紀錄表」會員</h3><p>當您在本網站中填寫「生涯紀錄表」成為會員後，您可以隨時利用您的本網站會員帳號和密碼修改您所輸入的資料。如果您忘記密碼，也可輸入您的身份證與email，請本網站將密碼e-mail給您。</p></li><li><h3>電子報會員</h3><p>若您訂閱本網站所提供的任何一種電子報，則您屬於本網站電子報會員，您可隨時至電子報增修處，修改或取消電子報訂閱。在任何時候您都可以重新開啟您的訂閱資料，以獲得職場訊息。</p></li><li><h3>其他</h3><p>除了您主動登錄的個人資料，您在本網站討論區或其他網友互動網頁等處，主動提供的個人資料，不在此修改範圍之內。</p></li></ul></section><hr><section><h2>5. 對於您個人資料的安全防範措施</h2><p>本網站所取得的個人資料，都僅供本網站於其內部、依照原來所說明的使用目的和範圍加以運用，除非事先說明、或依照相關法律規定，否則本網站不會將使用者個人資料提供給第三人、或移作其他目的使用。</p><p>建議您不要將密碼揭露給任何人。本網站絕不會在未經同意的電話或電子郵件中詢問您的密碼。在您完成取閱電子郵件等程序後，務必記得登出會員帳號，若您是與他人共享電腦或使用公共電腦，切記要關閉瀏覽器視窗，如此才能確保他人無法讀取您的個人資料和信件。</p><p>您的本網站會員帳號資料和網路身份檔案資料均有密碼保護，只有您才能讀取此個人資料。您可以利用本網站會員帳號和密碼，來修改本網站會員資料。</p><p>很抱歉，由網際網路資料的傳輸不能保證百分之百的安全。因此，儘管本網站努力保護您的個人資料安全，也無法確信或保證您傳送給我們的，或接收從我們的服務傳送出資料的安全，並且請您風險自擔。一旦收到您傳送的資料，我們將盡力以合理之技術及程序，保障您所有個人資料之安全。</p></section><hr><section><h2>6. 關於線上隱私我還應知道甚麼？</h2><p>請牢記，無論何時您自願於線上透露個人資料，如在留言板、透過電子郵件或者在聊天區，該資料均可能會被他人蒐集和使用。總之，如果您於線上公佈可被公眾讀取的個人資料時，您可能會收到其他團體主動提供的郵件。</p><p>基本上，您的密碼或任何會員帳戶資料的保密性必須由您單獨負責，請小心並保管您的會員資料。</p><p>您如果對於本網站隱私權保護政策、或與個人資料有關之相關事項有任何疑問，可以利用電子郵件和本網站會員服務中心聯絡，本網站將儘快回覆說明。</p></section>'
//   },
//   {
//     id: '2',
//     title: '政府網站資料開放宣告',
//     content:
//       '<section><h2>一、 授權方式及範圍</h2><p>為利各界廣為利用網站資料，青年職涯發展中心網站上刊載之所有資料與素材，其得受著作權保護之範圍，以無償、非專屬，得再授權之方式提供公眾使用，使用者得不限時間及地域，重製、改作、編輯、公開傳輸或為其他方式之利用，開發各種產品或服務（簡稱加值衍生物），此一授權行為不會嗣後撤回，使用者亦無須取得本機關之書面或其他方式授權。然使用時，應註明出處。</p></section><hr><section><h2>二、 相關事項說明</h2><p>(一) 本授權範圍僅及於著作權保護之範圍，不及於其他智慧財產權利，包括但不限於專利、商標、及機關標誌之提供。</p><p>(二) 當事人自行公開或依法令公開之個人資料是否得被蒐集、處理，及利用，使用者須自行依照個人資料保護法之相關規定，規劃並執行法律要求之相應措施。</p><p>(三) 部份的影音、圖像、樂譜、專人專案撰文，因機關網站依約僅具公開發表之地位，故經機關特別聲明須經同意方可使用的素材，不在本授權範圍之內。</p><p>(四) 使用本授權提供之資料與素材，不得惡意變更其相關資訊，若編輯、改作後所展示之資訊與原不符，使用者須自負民事、刑事上之法律責任。</p></section><hr><section><h2>三、 本網站之授權並不授予使用者，代表本機關建議、認可或贊同其加值衍生物之地位。</h2></section>'
//   },
//   {
//     id: '3',
//     title: '著作權聲明',
//     content:
//       '<section><p>用戶於青年職涯發展中心(以下宣稱為本網站)所發表之文章或圖像，其著作權為原作者所有，未經原作者同意，任何人不得以任何形式轉貼部份或全部之內容。</p><p>用戶於本站發表圖文前(包含發表言論與問題、投稿與推薦文章)，請先同意下列授權，若不同意下列授權事項，請勿於本站發表圖文。</p></section><hr><section><ol><li><p>本站所屬之網路媒體得以不同形式呈現及彙整圖文影音資料，以提供網友查詢、閱讀。</p></li><li><p>本站用戶在非營利用途下，得以下載或列印圖文影音內容。</p></li><li><p>當圖文影音內容違反本站站規或板規時，本網站管理員及板主得以刪除之。</p></li><li><p>本站討論區(生涯會客室、我的聊天室)之文字，將會被轉寄推薦給其他網友觀看。</p></li></ol><p>本站所有圖文影音等版權歸原作者所有，非經同意請勿轉載</p></section>'
//   }
// ];

const useStyles = makeStyles(theme => ({
  logoImgWrapper: {
    transitionProperty: 'box-shadow border-color',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,

    '&:hover': {
      transform: 'translate(-3px, -3px)'
    }
  },
  logoImg: {
    filter: 'drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.2))'
  }
}));
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
function FooterLayout2(props) {
  const classes = useStyles();
  // const [data, setData] = useState([]);
  // test
  // const [content, setContent] = useState(null);
  // const [dialog, setDialog] = useState({
  //   open: false,
  //   title: null,
  //   content: null
  // });
  const footerTheme = useSelector(({ fuse }) => fuse.settings.footerTheme);

  // useEffect(() => {
  //   setData(PrivacyDB);
  // }, []);

  // function handleOpenDialog(dialogData) {
  //   setDialog({
  //     open: true,
  //     ...dialogData
  //   });
  // }

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className="relative z-10 py-20 px-12 bg-cover bg-center shadow-none bg-gray-900"
        // style={{
        //   backgroundImage: 'url(/assets/images/footer/footer-bg.svg)'
        // }}
        color="default"
      >
        <div className="px-16 pt-24 flex flex-col items-center justify-between sm:py-0 container w-full">
          {/* Social */}
          <div className="flex justify-center items-center md:w-400">
            <div
              className={clsx(
                classes.logoImgWrapper,
                'w-64 p-12 cursor-pointer'
              )}
            >
              <a href="####" target="_blank" rel="noopener noreferrer">
                <img
                  alt="line Icon"
                  src="/assets/images/footer/line-icon.svg"
                />
              </a>
            </div>
            <div
              className={clsx(
                classes.logoImgWrapper,
                'w-64 p-12 cursor-pointer'
              )}
            >
              <a href="####" target="_blank" rel="noopener noreferrer">
                <img
                  alt="facebook Icon"
                  src="/assets/images/footer/facebook-icon.svg"
                />
              </a>
            </div>
            <div
              className={clsx(
                classes.logoImgWrapper,
                'w-64 p-12 cursor-pointer'
              )}
            >
              <a href="####" target="_blank" rel="noopener noreferrer">
                <img
                  alt="instagram Icon"
                  src="/assets/images/footer/instagram-icon.svg"
                />
              </a>
            </div>
            <div
              className={clsx(
                classes.logoImgWrapper,
                'w-64 p-12 cursor-pointer'
              )}
            >
              <a href="####" target="_blank" rel="noopener noreferrer">
                <img
                  alt="youtube Icon"
                  src="/assets/images/footer/youtube-icon.svg"
                />
              </a>
            </div>
            <div
              className={clsx(
                classes.logoImgWrapper,
                'w-64 p-12 cursor-pointer'
              )}
            >
              <a
                href="mailto:hsiuhuan@mail.yda.gov.tw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="email Icon"
                  src="/assets/images/footer/email-icon.svg"
                />
              </a>
            </div>
          </div>

          <Hidden mdUp>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-256 p-12"
                src="assets/images/logos/logo.png"
                alt="logo"
              />
              <div className="flex flex-col p-12 w-full text-center">
                <Typography variant="subtitle1" className="text-white">
                  Address | 14F., No.5, Xuzhou Rd., Zhongzheng District, Taipei
                  City 10055, Taiwan (R.O.C.)
                </Typography>
                <Typography variant="subtitle1" className="text-white">
                  Tel | <a href="tel:072313232">886-2-7736-5526</a>
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className="text-white"
                >
                  Email | iyouth@yda.gov.tw
                </Typography>
                {/* <Typography
                  variant="subtitle1"
                  component="p"
                  className="text-white"
                >
                  服務時間 | 週二至週日 09:00-18:00
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className="text-white"
                >
                  休息時間 | 固定週一休館
                </Typography> */}
              </div>
            </div>
          </Hidden>
          <Hidden smDown>
            <div className="flex flex-row justify-center items-center w-full pb-24">
              <img
                className="w-256 p-12"
                src="assets/images/logos/logo.png"
                alt="logo"
              />
              <div className="flex flex-col p-12">
                <Typography
                  variant="subtitle1"
                  component="p"
                  className="text-white"
                >
                  Email | hsiuhuan@mail.yda.gov.tw
                </Typography>
                <Typography variant="subtitle1" className="text-white">
                  Tel | <a href="tel:072313232">886-2-7736-5526</a>
                </Typography>
                <Typography variant="subtitle1" className="text-white">
                  Address | 14F., No.5, Xuzhou Rd., Zhongzheng District <br />
                  Taipei City 10055, Taiwan (R.O.C.)
                </Typography>
              </div>
            </div>
          </Hidden>

          <div className="flex flex-col justify-center items-center py-12 sm:py-0 sm:w-1/3">
            <Typography
              variant="subtitle1"
              className="whitespace-no-wrap text-white"
            >
              Copyrighgt © Youth Development Administration
            </Typography>

            <div className="flex justify-around items-center">
              <Link to="/login">Admin Panel</Link>
            </div>

            {/* <div className="flex justify-around items-center">
              {data.map(article => (
                <Typography
                  key={article.id}
                  variant="caption"
                  color="textSecondary"
                  className="px-8 cursor-pointer whitespace-no-wrap text-white"
                  onClick={() => handleOpenDialog(article)}
                >
                  {article.title}
                </Typography>
              ))}
            </div> */}
          </div>

          {/* {useMemo(() => {
            function handleCloseDialog() {
              setDialog({
                ...dialog,
                open: false
              });
            }

            return (
              <Dialog
                open={dialog.open}
                onClose={handleCloseDialog}
                aria-labelledby="knowledge-base-document"
                TransitionComponent={Transition}
              >
                <DialogTitle disableTypography>
                  <h2 className="text-center font-semibold">{dialog.title}</h2>
                </DialogTitle>
                <DialogContent>
                  <FroalaEditorView model={dialog.content} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} color="primary">
                    我已了解
                  </Button>
                </DialogActions>
              </Dialog>
            );
          }, [dialog])} */}
        </div>
      </AppBar>
    </ThemeProvider>
  );
}

export default FooterLayout2;
