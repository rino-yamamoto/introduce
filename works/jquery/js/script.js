$(function () {


//  ***** トップに戻るアニメーション設定 *****
    const toTop = $('#toTop');
    // aタグ、id、toTopを取得
    
    toTop.on('click', function () {

        $('html,body').animate({ scrollTop: 0 }, 500);
        // scrollTopは、Elementオブジェクトのプロパティで、Elementの一番上からのスクロール量をピクセル単位で設定できる

        return false;
        // aタグのクリックしたときの本来の動き（リンクする）を無効にするため
    });



//  ***** スクロール量を取得し、トップに戻るボタンを出し入れする　設定 ***** 
    $(window).on('scroll', function () {
        // windowのイベント機能のスクロールがされたとき

        const scl = $(this).scrollTop();
        // $(this)、つまりwindowがスクロールしているイベント本体のスクロール量を可変的に取得
        // console.log(scl);
        // console.log()で、スクロール量の可変値を確認
        // もし、スクロール量がある特定に値を超えた場合には、トップに戻るボタンをフェードイン
        // それ以外は、フェードアウトのif文の条件式
            if(scl > 300){
                toTop.fadeIn();
            }else{
                toTop.fadeOut();
            }
    });


 //  ***** Call To Actionを、一定時間後に発動させる　設定 *****    
    const bg = $('#bg');

    bg.hide();
    // bgを、最初は非表示にしておく

    function call() {
        bg.fadeIn();
    }
    // 一定時間後に発動させる内容を関数にしておく

    setTimeout(call, 3000);
    // setTimeoutで、3秒後に関数callを呼び出している

    const pr_close = $('#bg .close');
    pr_close.on('click', function () {
        bg.fadeOut();
    });
    // 閉じるボタンを押すと、bgがフェードアウトする

    bg.on('click', function () {
        $(this).fadeOut();
    });
    // bg自身をクリックすると自身がフェードアウトする


    const pr = $('#bg .pr');
    pr.on('click', function (e) {
  
        e.stopPropagation();
   
        })
    // 厳密には、pr上のどこを押しても親要素に場所までイベントが伝播してしまうので
    // その伝播を防いであげなくてはいけない


});