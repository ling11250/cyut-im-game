const gameData = {
    // ----------------- 第一題 -----------------
    "q1": {
        step: "Mission 01 / 03 // 專案初期大危機",
        text: "資訊週眼看就要到了，你們這組負責最硬的「系統分析與設計」專案發表。這時負責寫程式的組員突然傳訊崩潰：『慘了！我當初畫的系統設計藍圖（UML）跟資料庫對不起來，現在功能完全串不起來，系統要難產了！』身為核心組員，你決定：",
        options: [
            { text: "【A】「交給我處理！」採取爆肝技術模式，重新修改系統架構、把找不到物件的程式 Bug 通通改掉！", next: "q2_A", hint: "<b>資管特色 // UML 藍圖：</b>就像蓋房子的設計圖。資管人厲害的地方就在於，我們不只會寫程式，還要先畫出複雜的系統藍圖。藍圖錯了，後面程式就一定會塌掉！" },
            { text: "【B】「進行變更管理！」立刻召集組員縮小開發範圍，把做不出來的功能直接砍掉，全力衝刺精簡版的報告簡報！", next: "q2_B", hint: "<b>資管特色 // 專案範疇管理（Scope）：</b>資管也是管理學院！當時間不夠時，果斷砍掉非核心功能，確保專案能準時交件，是優秀 PM（專案經理）最重要的管理決策。" }
        ]
    },

    // ----------------- 第二題 (技術分支) -----------------
    "q2_A": {
        step: "Mission 02 / 03 // 技術線的試煉",
        text: "你連續熬夜兩天，喝掉三罐蠻牛，終於把程式碼全都改好了！隔天你趕到系館想跟組員合併檔案，結果這時候學校網路突然斷線，而你剛改好的程式完全還沒同步備份到雲端（GitHub）！你決定：",
        options: [
            { text: "【A1】發揮科技人的直覺！立刻開啟手機熱點，一邊瘋狂斷開又重連 Wi-Fi，一邊看著瀏覽器上那隻「斷網小恐龍」狂按重新整理，誓言一定要把網路給連回去！", next: "q3_A1", hint: "<b>資管特色 // GitHub 雲端備份：</b>寫程式的人最怕的就是檔案沒推上去（Push）。看到斷網小恐龍是每個科技人的共同噩夢，因為一不小心這兩天的努力就全沒了！" },
            { text: "【B1】時間不多了！立刻改用手機熱點，抓緊時間叫組員趕快優化網頁介面（UI/UX），先讓系統畫面看起來很酷炫，準備直接上台 Demo！", next: "q3_A2", hint: "<b>資管特色 // UI/UX 使用者體驗：</b>當後端功能來不及全部修好時，把介面刻得精美、漂亮、好操作，往往能在第一時間抓住評審教授的眼球，算是一種美學戰術！" }
        ]
    },

    // ----------------- 第二題 (管理分支) -----------------
    "q2_B": {
        step: "Mission 02 / 03 // 管理線的抉擇",
        text: "你們決定精簡功能，把做不出來的部分拿掉。結果在台下準備時，看到隔壁資工、資通系做出來的系統畫面超精美、功能超完整。組員瞬間信心崩潰、集體焦慮，身為專案經理（PM）的你決定：",
        options: [
            { text: "【A2】激起勝負欲！立刻上網複製別人的現成程式碼套件，逼組員這兩天一起不睡覺，硬把別人的功能拼裝進來！", next: "q3_B1", hint: "<b>資管特色 // 程式拼裝風險：</b>資管系很看重系統的「相容性」。在沒有規劃的情況下盲目拼裝網路上的現成程式碼，極容易在發表前夕讓系統徹底崩潰噴錯。" },
            { text: "【B2】穩住陣腳！強調：『我們這組的系統邏輯設計才是最嚴謹的！』放棄硬加功能，著手瘋狂演練台上的口頭報告與話術！", next: "q3_B2", hint: "<b>資管特色 // 系統邏輯（循序圖）：</b>資管系最經典的名言就是「技術為體、管理為用」。比起畫面很炫但沒邏輯，資管教授更看重系統內部的邏輯設計，可以用神級簡報說服評審！" }
        ]
    },

    // ----------------- 第三題 (上台發表決勝點) -----------------
    "q3_A1": {
        step: "Mission 03 / 03 // 純血技術流發表",
        text: "終於輪到你們這組上台報告，技術派教授雙眼放光地盯著你們極度嚴謹的資料庫架構，突然犀利提問：『你們後端技術很強，但這套商務系統的財務可行性與營運變現模式在哪裡？』你決定：",
        options: [
            { text: "【選擇】大膽直球對決！誠實回答：『教授，我們這組主攻後端技術與物件導向設計，管理與變現層面我們預計在下一階段評估！』", next: "end_1" },
            { text: "【選擇】施展管理學話術！立刻切換簡報：『感謝教授！我們這套系統是利用高效能架構來降低前期伺服器成本，這本身就是我們的核心商業優勢！』", next: "end_2" }
        ]
    },
    "q3_A2": {
        step: "Mission 03 / 03 // 視覺至上流發表",
        text: "你們把 UI/UX 刻得超級漂亮，台下的教授們看起來很滿意。但到了評審現場實際操作（Demo）的環節，管科教授突然隨手亂按你們的按鈕，系統因為後端沒修完，當場噴出滿螢幕的「500 Error」錯誤畫面！全場瞬間尷尬，你決定：",
        options: [
            { text: "【選擇】當場誠實道歉！雙手合十：『抱歉教授！因為剛剛跟雲端同步時發生版本衝突，我們會後立刻修復！』", next: "end_3" },
            { text: "【選擇】光速圓場話術！靈機一動：『教授不好意思，這個按鈕是我們設計的高階管理者權限，一般使用者觸發時會啟動系統安全防護機制！』", next: "end_2" }
        ]
    },
    "q3_B1": {
        step: "Mission 03 / 03 // 極限拼裝流發表",
        text: "你們硬是把網路上的精美套件拼裝進來，功能看起來多到爆炸。但在台上展示時，因為程式碼相容性太差，網頁加載速度慢到像在用 2G 網路，台下評審教授眉頭深鎖、開始瘋狂按原子筆。這時你決定：",
        options: [
            { text: "【選擇】硬著頭皮繼續講！假裝沒看到卡頓，繼續按照原本準備好的講稿死記硬背、一字不漏地唸完。", next: "end_3" },
            { text: "【選擇】臨場轉變策略！直接跳過卡住的畫面，把重點引導到系統未來的「可擴充性」與「大數據分析藍圖」上。", next: "end_2" }
        ]
    },
    "q3_B2": {
        step: "Mission 03 / 03 // 神級簡報流發表",
        text: "你們放棄加功能，改走精準報告路線。台上的你台風穩健、簡報充滿邏輯。外系教授突然冷笑一聲：『簡報很精彩，但你們這組做的功能大半都是用假資料展示，這根本不能算是個完整的資訊系統吧？』你決定：",
        options: [
            { text: "【選擇】完美實踐管理學！自信回答：『教授，資管的核心是系統分析！我們在有限時程內完成了最嚴謹的需求分析與邏輯架構，這才是系統成功的第一步！』", next: "end_4" },
            { text: "【選擇】低頭承認不足！坦言：『是的教授，技術實作上我們確實因為時間關係做了取捨，會後我們會努力把實體資料庫串接完成。』", next: "end_2" }
        ]
    },

    // ----------------- 四大結局 -----------------
    "end_1": {
        isEnding: true,
        isSuccess: true, 
        title: "👑 結局一：【純血技術宅的逆襲】",
        text: "發表當天，教授看著你們寫得極其嚴謹的系統架構與設計，滿意地點點頭。雖然被偏向管理學派的評審教授吐槽少了點商務思維，但你看向程式碼的眼神依然充滿驕傲。專題順利拿到了高分！發表完後，你直接衝回宿舍連睡 24 小時。"
    },
    "end_2": {
        isEnding: true,
        isSuccess: true, 
        title: "🌟 結局二：【驚險過關！資管黃金 PM 誕生】",
        text: "太神啦！你完美發揮了資管系「技術為體、管理為用」的最高話術境界！在系統與答辯的危機中，你靠著無懈可擊的臨場反應和流暢的邏輯，成功說服了台下的教授，化險為夷！專題順利拿到 A，你根本是未來的專案經理（PM）明日之星！"
    },
    "end_4": {
        isEnding: true,
        isSuccess: true, 
        title: "🥇 結局三：【資管之光！神級簡報俠】",
        text: "恭喜你！你們完美實踐了系統分析的真諦。雖然系統功能 because 時間關係沒能完全寫完，但靠著你強大到不行的台風、精美的圖表以及對系統邏輯的完美掌握，成功說服教授這是一套極具商業價值的作品！專題順利拿到 A+！"
    },
    "end_3": {
        isEnding: true,
        isSuccess: false,
        title: "🔨 結局四：【驚險壓線的低空重修緣】",
        text: "發表當天，因為前面的測試不足與臨場緊張，在被教授輪番轟炸下，全場氣氛瞬間尷尬。幸好組員在最後一刻切換簡報瘋狂打悲情牌。教授搖搖頭，給了一個勉強及格的 C。雖然沒有被當，但你看著成績單，深深覺得下學期一定要提早開始做專題了！"
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
                你是朝陽資管系大二學生。這學期最硬的「系統分析與設計」發表只剩三天，但團隊開發卻突然遇到了重大瓶頸！<br><br>
                快來幫忙做出抉擇！你們的決定，會讓這組在期末拿到 A+，還是必須在下學期摸摸鼻子，回資訊大樓重修呢？
            </div>
            <button class="start-btn" onclick="renderScene('q1')">開始挑戰 ENTER 🎮</button>
        </div>
    `;
}

function renderScene(id) {
    const box = document.getElementById("game-box");
    const data = gameData[id];

    if (data.isEnding) {
        let successTag = data.isSuccess ? '<div class="success-badge">🎉 MISSION ACCOMPLISHED 闖關成功！</div>' : "";
        box.innerHTML = `
            <div class="ending-title" style="color: ` + (data.isSuccess ? '#10b981' : '#ef4444') + `">` + data.title + `</div>
            <div class="situation">` + data.text + `</div>
            ` + successTag + `
            <button class="restart-btn" onclick="initGame()">返回主畫面 🔄</button>
            
            <div class="msg-board">
                <h3>💬 玩家留言板</h3>
                <div class="msg-form">
                    <div class="msg-input-row">
                        <input type="text" id="nickname" class="msg-name" placeholder="暱稱 (留空變匿名)">
                        <input type="text" id="content" class="msg-content" placeholder="留下一句完成遊戲的心得吧...">
                    </div>
                    <button class="msg-submit-btn" onclick="addMessage()">送出留言</button>
                </div>
                <div class="msg-list" id="msg-list">
                    </div>
            </div>
        `;
        // 當跑出結局時，立刻撈取之前的留言顯示出來
        displayMessages();
        return;
    }

    let optionsHtml = "";
    data.options.forEach((opt, index) => {
        let hintBtnHtml = opt.hint ? `<button class="hint-btn" onclick="toggleHint(` + index + `)">💡 術語解釋 // 這是什麼意思？</button>` : "";
        let hintContentHtml = opt.hint ? `<div class="hint-content" id="hint-` + index + `">` + opt.hint + `</div>` : "";
        
        optionsHtml += `
            <div class="option-item">
                <button class="option-btn" onclick="renderScene('` + opt.next + `')">` + opt.text + `</button>
                ` + hintBtnHtml + `
                ` + hintContentHtml + `
            </div>
        `;
    });

    box.innerHTML = `
        <div class="progress">` + data.step + `</div>
        <div class="situation">` + data.text + `</div>
        <div class="options-list">` + optionsHtml + `</div>
    `;
}

function toggleHint(index) {
    const h = document.getElementById("hint-" + index);
    h.style.display = (h.style.display === "block") ? "none" : "block";
}

// ----------------- 留言板邏輯控制 -----------------
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
    
    // 從最新到最舊排列
    let html = "";
    msgs.reverse().forEach(m => {
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
    
    // 取得目前時間
    let now = new Date();
    let timeStr = (now.getMonth() + 1) + "/" + now.getDate() + " " + now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    
    let msgs = getMessages();
    msgs.push({ name: name, text: text, time: timeStr });
    
    localStorage.setItem("game_comments", JSON.stringify(msgs));
    
    // 清空輸入框
    contentInput.value = "";
    
    // 重新渲染顯示
    displayMessages();
}

initGame();