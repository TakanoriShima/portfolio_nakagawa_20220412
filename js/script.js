/* global $*/
$(function(){
    
    // textyleF
	$('.ex1').textyleF();
	
	// スムーズスクロール
    $('a').on('click', function() {
        const adjust = 0;
        const speed = 1000;
        const href = $(this).attr("href");
        console.log('href: ' + href);
        const goal = $(href);
        console.log('goal offset_left: ' + goal.offset().left + 'px');
        console.log('goal offset_top: ' + goal.offset().top + 'px');
        
        const position_top = goal.offset().top + adjust;
        $('body, html').animate({scrollTop: position_top}, speed, 'swing');
        
        return false;
    });
    
    // コンタクトの設計図作成
    class Contact {
        // プロパティ
        name; // 名前
        email; // メールアドレス
        message; // メッセージ
        // コンストラクタ
        constructor(name, email, message){
            this.name = name;
            this.email = email;
            this.message = message;
        }
        // 入力値検証
        validate(){
            
            $('span').remove();
            
            let flag = true;
            
            if(this.name === ''){
                $('input[id="name"]').before($('<span>', {text: '名前を入力してください'}));
                flag = false;
            }
            
            if(this.email === ''){
                $('input[id="email"]').before($('<span>', {text: 'メールアドレスを入力してください'}));
                flag = false;
            }else if(!/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/.test(this.email)){
                $('input[id="email"]').before($('<span>', {text: 'メールアドレスを正しく入力してください'}));
                flag = false;
            }
            
            if(this.message === ''){
                $('textarea[id="message"]').before($('<span>', {text: 'メッセージを正しく入力してください'}));
                flag = false;
            }
            
            $('span').addClass('error');
            return flag;
        }
        
    }
    
    // 送信ボタンを押した時の処理
    $('#submit').on('click', () => {
        // フォームからの入力値を取得
        const name = $('input[id="name"]').val();
        const email = $('input[id="email"]').val();
        const message = $('textarea[id="message"]').val();
        const contact = new Contact(name, email, message);
        // 入力値の検証実施
        let flag = contact.validate();
        
        // 正常に入力されていたならば
        if(flag){
            console.log('入力は正しい');
            $('input').val('');
            $('textarea').val('');
            // Ajax通信でメール送信
        }else{
            console.log('入力間違いがある');
        }
    });
});