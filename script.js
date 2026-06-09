const gameData = {
    // ----------------- 問題一 -----------------
    "q1": {
        step: "SYSTEM_ERROR // 危機降臨",
        text: "專題發表眼看就要到了，這時寫程式的組員卻突然傳訊崩潰：『我不做了…寫了半天的程式跟資料庫卻對不起來，現在功能完全串不起來。』身為核心組員，你決定？：",
        options: [
            { text: "[ 💻 爆肝扛下所有 ]", next: "q2_A" },
            { text: "[ 🥺 老師菜菜撈撈 ]", next: "q2_B" },
            { text: "[ 🚪 不幹了 退學吧 ]", next: "end_2" }
        ]
    },

    // ----------------- 問題二 -----------------
    "q2_A": {
        step: "REBOOT_FAILED // 肝帝的試煉",
        text: "你爆肝熬了兩天，喝掉三罐蠻牛，終於把負責項目全都改好了！電腦卻在你存檔的前一刻斷線，你決定？",
        options: [
            { text: "[ 🔥 死也要交出東西 ]", next: "q3_live" },
            { text: "[ 🌭 人生無常，大腸包小腸，不做了 ]", next: "end_2" },
            { text: "[ 🐶 教授您好我說我電腦被狗啃了你信嗎 ]", next: "q3_dog" }
        ]
    },
    "q2_B": {
        step: "REBOOT_FAILED // 撈撈線的抉擇",
        text: "你決定去找老師撈撈，但老師看了一眼你們空空如也的進度，推了推眼鏡說：『同學，這分數我真的很難給，你們發表當天到底拿得出一點東西嗎？』這時你決定？",
        options: [
            { text: "[ 💪 死也要交出東西（拼了命通宵補出來） ]", next: "q3_live" },
            { text: "[ 🌭 人生無常，大腸包小腸，不做了 ]", next: "end_2" },
            { text: "[ 🐶 教授您好我說我電腦被狗啃了你信嗎 ]", next: "q3_dog" }
        ]
    },

    // ----------------- 問題三 -----------------
    "q3_live": {
        step: "FINAL_STAGE // 最終發表",
        text: "終於輪到你們這組上台報告，教授雙眼放光地盯著你們，說想看一下工作分配表。你默默放空眼神，腦子里浮現那個神隱隊友的身影，你決定？",
        options: [
            { text: "[ 🖕 教授就是他在混 當他 ]", next: "end_3" },
            { text: "[ 🤝 做人留一線日後好相見 我們都有做事！ ]", next: "end_1" }
        ]
    },
    "q3_dog": {
        step: "FINAL_STAGE // 最終發表",
        text: "上台報告時，你硬著頭皮跟教授說電腦被狗啃了。教授冷笑一聲，翻開你們的工作分配表，問：『那其他組員負責的部分呢？』你默默放空眼神，腦子里浮現那個神隱隊友的身影，你決定？",
        options: [
            { text: "[ 🖕 教授就是他在混 當他 ]", next: "end_3" },
            { text: "[ 🤝 做人留一線日後好相見 我們都有做事！ ]", next: "end_2" }
        ]
    },

    // ----------------- 三大結局 -----------------
    "end_1": {
        isEnding: true,
        isSuccess: true, 
        title: "👑 結局一：【佛系爆肝期末狗】",
        text: "發表順利結束了！你發揮了極致的佛系大愛精神，爆了肝還保了神隱隊友。雖然累到靈魂出竅、每天像隻狗一樣睡不飽，但你們這組最後還是驚險拿到分數，期末順利歐趴！趕快回宿舍爆睡一場吧！"
    },
    "end_2": {
        isEnding: true,
        isSuccess: false, 
        title: "💤 結局二：【休息是為了明天不用走路】",
        text: "你選擇了放飛自我！大腸包小腸、退學、或者是消極抵抗，反正人生條條大路通羅馬。專題什麼的直接隨風而去吧！這學期只能摸摸鼻子準備重修了，不過至少你的肝現在非常健康、睡得很飽。"
    },
    "end_3": {
        isEnding: true,
        isSuccess: true, 
        title: "💥 結局三：【6767炸翻全世界】",
        text: "太狠了！你直接在台上使出玉石俱焚之術，當場把神隱隊友給炸翻！全場氣氛瞬間嗨到最高點，連教授都忍不住幫你鼓掌。這場發表直接炸翻全世界，雖然跟隊友關係徹底決裂，但你歐趴得問心無愧、超級爽快！"
    }
};

function initGame() {
    const box = document.getElementById("game-box");
    box.innerHTML = `
        <div class="start-screen">
            <div class="event-badge">資通 ✕ 資管 ✕ 資工 三系聯合資訊週</div>
            <div class="start-title">朝陽資管專題生存戰<br>🔥 期末大危機 🔥</div>
            <div class="start-slogan">「資想與你通快嗨，管你閒不閒」</div>
            <div class="start-intro">
                你是朝陽資管系大二學生，但團隊開發卻突然遇到了重大瓶頸！<br><br>
                快來看看你們會如何決定，是期末歐趴，還是摸摸鼻子重修呢？
            </div>
            <button class="start-btn" onclick="renderScene('q1')">INITIALIZE_GAME // 開始挑戰 🎮</button>
        </div>
    `;
}

function renderScene(id) {
    const box = document.getElementById("game-box");
    const data = gameData[id];

    if (data.isEnding) {
        let badgeColor = data.isSuccess ? '#10b981' : '#ef4444';
        let badgeText = data.isSuccess ? 'SYS_STATUS: OPA_SUCCESS // 期末歐趴成功' : 'SYS_STATUS: RE_TAKE // 摸摸鼻子準備重修';
        
        box.innerHTML = `
            <div class="ending-title" style="color: ${badgeColor}">${data.title}</div>
            <div class="situation">${data.text}</div>
            <div class="success-badge" style="color: ${badgeColor}; border-color: ${badgeColor}">${badgeText}</div>
            
            <button class="restart-btn" onclick="initGame()">SYSTEM_REBOOT // 返回主畫面 🔄</button>
            
            <div class="msg-board">
                <h3>💬 玩家觀摩留言板</h3>
                <div class="msg-form">
                    <div class="msg-input-row">
                        <input type="text" id="nickname" class="msg-name" placeholder="暱稱 (留空變匿名)">
                        <input type="text" id="content" class="msg-content" placeholder="留下一句對這組資管學生的祝福吧...">
                    </div>
                    <button class="msg-submit-btn" onclick="addMessage()">送出留言</button>
                </div>
                <div class="msg-list" id="msg-list"></div>
            </div>
        `;
        displayMessages();
        return;
    }

    let optionsHtml = "";
    data.options.forEach((opt) => {
        optionsHtml += `
            <div class="option-item">
                <button class="option-btn" onclick="renderScene('${opt.next}')">${opt.text}</button>
            </div>
        `;
    });

    box.innerHTML = `
        <div class="progress">>> ${data.step}</div>
        <div class="situation">${data.text}</div>
        <div class="options-list">${optionsHtml}</div>
    `;
}

function getMessages() {
    let msgs = localStorage.getItem("game_comments");
    return msgs ? JSON.parse(msgs) : [];
}

function displayMessages() {
    const list = document.getElementById("msg-list");
    const msgs = getMessages();
    
    if (msgs.length === 0) {
        list.innerHTML = `<div style="text-align:center; color:#94a3b8; font-size:0.85rem; padding:15px;">目前還沒有留言，快來搶頭香！</div>`;
        return;
    }
    
    let html = "";
    [...msgs].reverse().forEach(m => {
        html += `
            <div class="msg-item">
                <span class="msg-item-user">👤 ${m.name}：</span>
                <span class="msg-item-text">${m.text}</span>
                <span class="msg-item-time">${m.time}</span>
            </div>
        `;
    });
    list.innerHTML = html;
}

function addMessage() {
    const nameInput = document.getElementById("nickname");
    const contentInput = document.getElementById("content");
    
    let name = nameInput.value.trim() === "" ? "匿名資管粉" : nameInput.value.trim();
    let text = contentInput.value.trim();
    
    if (text === "") {
        alert("不能留空白喔！請隨便打幾個字吧～");
        return;
    }
    
    let now = new Date();
    let timeStr = (now.getMonth() + 1) + "/" + now.getDate() + " " + now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    
    let msgs = getMessages();
    msgs.push({ name: name, text: text, time: timeStr });
    
    localStorage.setItem("game_comments", JSON.stringify(msgs));
    contentInput.value = "";
    displayMessages();
}

initGame();