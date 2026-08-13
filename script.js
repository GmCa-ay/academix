// SEED DATA — only used to pre-fill the built-in "Patrick" demo account.
    // Every other/new account starts completely empty.
    const DEFAULT_SCHEDULE = {
      Monday: [
        { id: 1, time: "07:00 AM - 08:30 AM", code: "EE 231", title: "Basic Electrical Engineering (Lec)", room: "TBA", type: "lecture" },
        { id: 2, time: "10:00 AM - 11:30 AM", code: "GE Elect 2", title: "Gender and Society / Entrepreneurial Mind", room: "ME", type: "lecture" },
        { id: 3, time: "11:30 AM - 01:00 PM", code: "BREAK", title: "Lunch Break", room: "--", type: "break" },
        { id: 4, time: "01:00 PM - 02:30 PM", code: "Math 111E", title: "Engineering Data Analysis", room: "BH 30", type: "lecture" },
        { id: 5, time: "04:00 PM - 05:30 PM", code: "Augustine 3", title: "Christian Morality", room: "Online", type: "online" }
      ],
      Tuesday: [
        { id: 6, time: "07:00 AM - 08:30 AM", code: "GE 6", title: "Art Appreciation", room: "Online", type: "online" },
        { id: 7, time: "08:30 AM - 10:00 AM", code: "ME 231", title: "Thermodynamics 1", room: "Online", type: "online" },
        { id: 8, time: "10:00 AM - 01:00 PM", code: "BREAK", title: "Lunch Break", room: "--", type: "break" },
        { id: 9, time: "01:00 PM - 04:00 PM", code: "ME 232a", title: "Workshop Theory and Practice (Lab)", room: "ME LAB", type: "lab" },
        { id: 10, time: "04:30 PM - 06:00 PM", code: "ME 110", title: "Differential Equations", room: "BH 30", type: "lecture" }
      ],
      Wednesday: [
        { id: 11, time: "10:00 AM - 11:30 AM", code: "GE 5", title: "Purposive Communication", room: "Online", type: "online" }
      ],
      Thursday: [
        { id: 12, time: "07:00 AM - 10:00 AM", code: "EE 231a", title: "Basic Electrical Engineering (Lab)", room: "ECE LAB", type: "lab" },
        { id: 13, time: "10:00 AM - 11:30 AM", code: "GE Elect 2", title: "Gender and Society / Entrepreneurial Mind", room: "Online", type: "online" },
        { id: 14, time: "11:00 AM - 01:00 PM", code: "BREAK", title: "Lunch Break", room: "--", type: "break" },
        { id: 15, time: "01:00 PM - 02:30 PM", code: "Math 111E", title: "Engineering Data Analysis", room: "BH 30", type: "lecture" },
        { id: 16, time: "04:00 PM - 05:30 PM", code: "Augustine 3", title: "Christian Morality", room: "Online", type: "online" }
      ],
      Friday: [
        { id: 17, time: "07:00 AM - 08:30 AM", code: "GE 6", title: "Art Appreciation", room: "Online", type: "online" },
        { id: 18, time: "08:30 AM - 10:00 AM", code: "ME 231", title: "Thermodynamics 1", room: "BH 30 (CR)", type: "lecture" },
        { id: 19, time: "04:30 PM - 06:00 PM", code: "Math 110", title: "Differential Equation", room: "BH 30", type: "lecture" }
      ],
      Saturday: [
        { id: 20, time: "10:00 AM - 11:30 AM", code: "GE 5", title: "Purposive Communication", room: "Online", type: "online" },
        { id: 21, time: "11:30 AM - 01:00 PM", code: "BREAK", title: "Lunch Break", room: "--", type: "break" },
        { id: 22, time: "01:00 PM - 04:00 PM", code: "Mech 310", title: "Statics of Rigid Bodies", room: "No Room", type: "lecture" },
        { id: 23, time: "04:00 PM - 06:00 PM", code: "PATHFIT 3", title: "Dance", room: "GYM", type: "lab" }
      ]
    };

    const DEFAULT_NOTES = [
      { id: 1, subject: "Gender and Society", url: "#" },
      { id: 2, subject: "Art Appreciation", url: "https://docs.google.com/document/d/1_1uAg3Vhhd42ARFEIKbo5TlNvbDhW_ym/edit?usp=sharing" },
      { id: 3, subject: "Basic Electrical Engineering", url: "https://docs.google.com/document/d/1Z5Iv8CpCkB2NJ8mSdGy23rD53irNJLYB/edit?usp=sharing" },
      { id: 4, subject: "Statics of Rigid Bodies", url: "https://docs.google.com/document/d/12n6bbwFK-ZGrQd2Hn-dKObjuawQm8fAY/edit?usp=sharing" },
      { id: 5, subject: "Purposive Communication", url: "https://docs.google.com/document/d/1jjO1a-W4BJyMyJQ7lSH149nv148PO6qW/edit?usp=sharing" },
      { id: 6, subject: "Engineering Data Analysis", url: "https://docs.google.com/document/d/1qWqJOjS2iUdW2-JskBzciv5T4FuKIQJXlIRZvkOn9xw/edit?usp=sharing" },
      { id: 7, subject: "Differential Equation", url: "https://docs.google.com/document/d/110a7eWOu1k7FCospDCFZ088BY8PEIYR7/edit?usp=sharing" }
    ];

    const DEFAULT_MEETS = [
      { id: 1, subject: "Art Appreciation", url: "https://meet.google.com/fen-mayf-wwh" },
      { id: 2, subject: "Purposive Communication", url: "https://meet.google.com/fen-mayf-wwh" },
      { id: 3, subject: "Gender and Society", url: "https://meet.google.com/pvu-nwsy-jbk" },
      { id: 4, subject: "Christian Morality", url: "https://meet.google.com/mos-jvgb-gss" }
    ];

    const DEFAULT_CHATS = [
      { id: 1, subject: "Differential Equation", url: "https://www.facebook.com/messages/t/857543600455020" },
      { id: 2, subject: "Statics and Rigid Bodies", url: "https://www.facebook.com/messages/t/1024656540336615" },
      { id: 3, subject: "Basic Electrical Engineering", url: "https://www.facebook.com/messages/t/1744174793401960" },
      { id: 4, subject: "Engineering Data Analysis", url: "https://www.facebook.com/messages/t/1393162329343581" },
      { id: 5, subject: "Workshop Theory and Practice", url: "https://www.facebook.com/messages/t/27407126888986026" },
      { id: 6, subject: "Pathfit 3", url: "https://www.facebook.com/messages/t/1394074098749194" },
      { id: 7, subject: "Purposive Communication", url: "https://meet.google.com/jib-thwc-phf" },
      { id: 8, subject: "Gender and Society", url: "#" },
      { id: 9, subject: "Christian Morality", url: "https://www.facebook.com/messages/t/1044256337982254" }
    ];

    const DEFAULT_GRADES = [
      { subject: "Gender and Society", cs: [{ id: 1, name: "Quiz 1", score: 95 }, { id: 2, name: "Infographic", score: 90 }], exam: [{ id: 1, name: "Midterm Exam", score: 92 }] },
      { subject: "Art Appreciation", cs: [{ id: 1, name: "Critique Paper", score: 88 }], exam: [{ id: 1, name: "Midterm Exam", score: 90 }] },
      { subject: "Basic Electrical Engineering", cs: [{ id: 1, name: "Lab Act 1", score: 85 }], exam: [{ id: 1, name: "Midterm Exam", score: 88 }] },
      { subject: "Statics and Rigid Bodies", cs: [{ id: 1, name: "Problem Set 1", score: 90 }], exam: [{ id: 1, name: "Midterm Exam", score: 86 }] },
      { subject: "Purposive Communication", cs: [{ id: 1, name: "Speech Task", score: 94 }], exam: [{ id: 1, name: "Midterm Exam", score: 92 }] },
      { subject: "Engineering Data Analysis", cs: [{ id: 1, name: "Worksheet 1", score: 89 }], exam: [{ id: 1, name: "Midterm Exam", score: 91 }] },
      { subject: "Differential Equation", cs: [{ id: 1, name: "Quiz 1", score: 86 }], exam: [{ id: 1, name: "Midterm Exam", score: 90 }] },
      { subject: "Christian Morality", cs: [{ id: 1, name: "Reflection 1", score: 96 }], exam: [{ id: 1, name: "Midterm Exam", score: 94 }] },
      { subject: "Workshop Theory and Practice", cs: [{ id: 1, name: "Practical 1", score: 92 }], exam: [{ id: 1, name: "Midterm Exam", score: 89 }] },
      { subject: "Pathfit 3", cs: [{ id: 1, name: "Fitness Routine", score: 98 }], exam: [{ id: 1, name: "Practical Exam", score: 95 }] }
    ];

    function emptySchedule() {
      return { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [] };
    }

    // LIVE STATE — starts empty for every account; loaded per-user after login.
    let scheduleState = emptySchedule();
    let activeScheduleDay = "Monday";

    function renderSchedule() {
      const container = document.getElementById('schedule-list-container');
      const dayClasses = scheduleState[activeScheduleDay] || [];

      if (dayClasses.length === 0) {
        container.innerHTML = `<div class="p-6 text-center text-gray-400 font-medium text-xs">No classes scheduled for ${activeScheduleDay}. Add one with "Add Class" above.</div>`;
        return;
      }

      container.innerHTML = dayClasses.map(item => {
        let typeBadge = '';
        let borderClass = 'border-red-100 dark:border-red-900/40';

        if (item.type === 'online') {
          typeBadge = `<span class="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"><i class="fa-solid fa-wifi"></i> Online</span>`;
        } else if (item.type === 'lab') {
          typeBadge = `<span class="bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"><i class="fa-solid fa-flask"></i> Lab</span>`;
        } else if (item.type === 'break') {
          typeBadge = `<span class="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"><i class="fa-solid fa-utensils"></i> Break</span>`;
          borderClass = 'border-amber-200/60 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20';
        } else {
          typeBadge = `<span class="bg-red-100 text-brand-800 dark:bg-red-950 dark:text-red-300 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"><i class="fa-solid fa-chalkboard-user"></i> Lecture</span>`;
        }

        return `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-gray-50/80 dark:bg-red-950/40 rounded-2xl border ${borderClass} gap-3 hover:shadow-sm transition-all group">
            <div class="flex items-start sm:items-center space-x-3">
              <div class="bg-white dark:bg-[#2a1613] p-2.5 rounded-xl border border-gray-100 dark:border-red-800/60 text-center shrink-0 min-w-[110px]">
                <p class="text-[11px] font-bold text-gray-800 dark:text-red-200 flex items-center justify-center gap-1">
                  <i class="fa-regular fa-clock text-brand-500 text-[10px]"></i> ${item.time}
                </p>
              </div>
              <div>
                <div class="flex items-center space-x-2">
                  <span class="font-extrabold text-xs text-brand-800 dark:text-brand-300 uppercase">${item.code}</span>
                  <span class="text-[10px] text-gray-400 font-medium">• ${item.room}</span>
                </div>
                <h4 class="font-semibold text-xs text-gray-800 dark:text-red-100 mt-0.5">${item.title}</h4>
              </div>
            </div>
            <div class="self-end sm:self-auto flex items-center gap-2">
              ${typeBadge}
              <button onclick="deleteClassItem('${activeScheduleDay}', ${item.id})" class="text-gray-300 dark:text-gray-600 hover:text-rose-500 dark:hover:text-rose-400 transition-colors p-1" title="Delete Class">
                <i class="fa-solid fa-trash-can text-xs"></i>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    function selectScheduleDay(day) {
      activeScheduleDay = day;
      document.querySelectorAll('.schedule-day-tab').forEach(tab => {
        tab.className = "schedule-day-tab px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 bg-gray-100 dark:bg-red-950/80 text-gray-600 dark:text-red-300 hover:bg-brand-50";
      });

      const selectedTab = document.getElementById(`tab-${day}`);
      if (selectedTab) {
        selectedTab.className = "schedule-day-tab px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 bg-brand-800 text-white shadow-sm";
      }

      renderSchedule();
    }

    function toggleQuickClassForm() {
      document.getElementById('quick-class-bar').classList.toggle('hidden');
    }

    function submitQuickClass() {
      const code = document.getElementById('c-class-code').value.trim() || 'Untitled';
      const title = document.getElementById('c-class-title').value.trim() || 'Untitled Class';
      const time = document.getElementById('c-class-time').value.trim() || 'TBA';
      const room = document.getElementById('c-class-room').value.trim() || 'TBA';
      const type = document.getElementById('c-class-type').value;

      if (!scheduleState[activeScheduleDay]) scheduleState[activeScheduleDay] = [];
      scheduleState[activeScheduleDay].push({ id: Date.now(), time, code, title, room, type });

      document.getElementById('c-class-code').value = '';
      document.getElementById('c-class-title').value = '';
      document.getElementById('c-class-time').value = '';
      document.getElementById('c-class-room').value = '';
      toggleQuickClassForm();
      renderSchedule();
      saveScheduleState();
    }

    function deleteClassItem(day, id) {
      if (!scheduleState[day]) return;
      scheduleState[day] = scheduleState[day].filter(i => i.id !== id);
      renderSchedule();
      saveScheduleState();
    }

    // LIVE LINKS STATE — starts empty for every account
    let notesState = [];
    let meetsState = [];
    let chatsState = [];
    let tasksState = [];
    let currentTaskFilter = 'academic';
    let gradesState = [];

    const hasClaudeStorage = typeof window !== 'undefined' && window.storage && typeof window.storage.get === 'function';

    const hasLocalStorage = (function () {
      try {
        const testKey = '__academix_test__';
        window.localStorage.setItem(testKey, '1');
        window.localStorage.removeItem(testKey);
        return true;
      } catch (err) {
        return false;
      }
    })();

    async function persistSave(key, value) {
      const json = JSON.stringify(value);
      let savedSomewhere = false;

      if (hasClaudeStorage) {
        try {
          await window.storage.set(key, json);
          savedSomewhere = true;
        } catch (err) {
          console.error(`Claude storage save failed for ${key}:`, err);
        }
      }

      if (hasLocalStorage) {
        try {
          window.localStorage.setItem(key, json);
          savedSomewhere = true;
        } catch (err) {
          console.error(`localStorage save failed for ${key}:`, err);
        }
      }

      if (!savedSomewhere) {
        console.warn(`No storage layer available — "${key}" will not persist after reload.`);
      }
    }

    async function persistLoad(key) {
      if (hasClaudeStorage) {
        try {
          const res = await window.storage.get(key);
          if (res && typeof res.value === 'string') {
            return JSON.parse(res.value);
          }
        } catch (err) {
          // Read failed or key missing
        }
      }

      if (hasLocalStorage) {
        try {
          const raw = window.localStorage.getItem(key);
          if (raw) return JSON.parse(raw);
        } catch (err) {
          // Nothing usable in localStorage
        }
      }

      return null;
    }

    let currentUsername = null;

    function getUserKey(key) {
      return `user::${currentUsername}::${key}`;
    }

    async function saveTasksState() {
      await persistSave(getUserKey('tasksState'), tasksState);
    }

    async function saveGradesState() {
      await persistSave(getUserKey('gradesState'), gradesState);
    }

    async function saveScheduleState() {
      await persistSave(getUserKey('scheduleState'), scheduleState);
    }

    async function saveNotesState() {
      await persistSave(getUserKey('notesState'), notesState);
    }

    async function saveMeetsState() {
      await persistSave(getUserKey('meetsState'), meetsState);
    }

    async function saveChatsState() {
      await persistSave(getUserKey('chatsState'), chatsState);
    }

    async function loadPersistedState() {
      // Reset to empty defaults first so switching accounts never leaks the
      // previous user's in-memory data into a fresh/empty account.
      tasksState = [];
      gradesState = [];
      scheduleState = emptySchedule();
      notesState = [];
      meetsState = [];
      chatsState = [];
      aiHistory = [];

      const savedTasks = await persistLoad(getUserKey('tasksState'));
      if (Array.isArray(savedTasks)) tasksState = savedTasks;

      const savedGrades = await persistLoad(getUserKey('gradesState'));
      if (Array.isArray(savedGrades)) gradesState = savedGrades;

      const savedSchedule = await persistLoad(getUserKey('scheduleState'));
      if (savedSchedule && typeof savedSchedule === 'object') scheduleState = savedSchedule;

      const savedNotes = await persistLoad(getUserKey('notesState'));
      if (Array.isArray(savedNotes)) notesState = savedNotes;

      const savedMeets = await persistLoad(getUserKey('meetsState'));
      if (Array.isArray(savedMeets)) meetsState = savedMeets;

      const savedChats = await persistLoad(getUserKey('chatsState'));
      if (Array.isArray(savedChats)) chatsState = savedChats;

      const savedHistory = await persistLoad(getUserKey('aiHistory'));
      if (Array.isArray(savedHistory)) aiHistory = savedHistory;
    }

    // ===================== LOCAL ACCOUNT SYSTEM (NO BACKEND) =====================
    const ACCOUNTS_KEY = 'academix_accounts';       // { username: password }
    const SESSION_KEY = 'academix_current_user';
    let authMode = 'login';

    async function loadAccounts() {
      const accounts = await persistLoad(ACCOUNTS_KEY);
      return (accounts && typeof accounts === 'object') ? accounts : {};
    }

    async function saveAccounts(accounts) {
      await persistSave(ACCOUNTS_KEY, accounts);
    }

    // Makes sure the built-in "Patrick" demo account exists (first run only)
    // and is pre-loaded with the sample Mechanical Engineering data.
    async function ensureDemoAccount() {
      const accounts = await loadAccounts();
      if (Object.keys(accounts).length === 0) {
        accounts['Patrick'] = '12345678';
        await saveAccounts(accounts);
        await persistSave('user::Patrick::scheduleState', DEFAULT_SCHEDULE);
        await persistSave('user::Patrick::notesState', DEFAULT_NOTES);
        await persistSave('user::Patrick::meetsState', DEFAULT_MEETS);
        await persistSave('user::Patrick::chatsState', DEFAULT_CHATS);
        await persistSave('user::Patrick::gradesState', DEFAULT_GRADES);
        await persistSave('user::Patrick::tasksState', []);
      }
    }

    function setAuthMode(mode) {
      authMode = mode;
      const tabLogin = document.getElementById('auth-tab-login');
      const tabSignup = document.getElementById('auth-tab-signup');
      const submitBtn = document.getElementById('auth-submit-btn');
      const errorBox = document.getElementById('auth-error');
      errorBox.classList.add('hidden');

      if (mode === 'login') {
        tabLogin.className = "flex-1 px-3 py-2 rounded-lg bg-white dark:bg-red-800 shadow-sm text-brand-800 dark:text-white transition-all";
        tabSignup.className = "flex-1 px-3 py-2 rounded-lg text-gray-500 dark:text-red-300/60 transition-all";
        submitBtn.innerText = 'Log In';
      } else {
        tabSignup.className = "flex-1 px-3 py-2 rounded-lg bg-white dark:bg-red-800 shadow-sm text-brand-800 dark:text-white transition-all";
        tabLogin.className = "flex-1 px-3 py-2 rounded-lg text-gray-500 dark:text-red-300/60 transition-all";
        submitBtn.innerText = 'Create Account';
      }
    }

    function showAuthError(message) {
      const errorBox = document.getElementById('auth-error');
      errorBox.innerText = message;
      errorBox.classList.remove('hidden');
    }

    async function handleAuthSubmit(e) {
      e.preventDefault();
      const username = document.getElementById('auth-username').value.trim();
      const password = document.getElementById('auth-password').value;

      if (!username || !password) {
        showAuthError('Please fill in both fields.');
        return;
      }

      const accounts = await loadAccounts();

      if (authMode === 'login') {
        if (!accounts.hasOwnProperty(username)) {
          showAuthError('No account found with that username.');
          return;
        }
        if (accounts[username] !== password) {
          showAuthError('Incorrect password.');
          return;
        }
        await logInAs(username);
      } else {
        if (accounts.hasOwnProperty(username)) {
          showAuthError('That username is already taken.');
          return;
        }
        accounts[username] = password;
        await saveAccounts(accounts);
        await logInAs(username);
      }
    }

    async function logInAs(username) {
      currentUsername = username;
      await persistSave(SESSION_KEY, username);
      await loadPersistedState();
      showApp();
    }

    function logoutUser() {
      currentUsername = null;
      persistSave(SESSION_KEY, null);
      document.getElementById('auth-username').value = '';
      document.getElementById('auth-password').value = '';
      document.getElementById('auth-error').classList.add('hidden');
      setAuthMode('login');
      document.getElementById('app-shell').classList.add('hidden');
      document.getElementById('auth-overlay').classList.remove('hidden');
    }

    function showApp() {
      document.getElementById('auth-overlay').classList.add('hidden');
      document.getElementById('app-shell').classList.remove('hidden');

      const avatar = document.getElementById('profile-avatar');
      const nameEl = document.getElementById('profile-username');
      if (avatar) avatar.innerText = currentUsername.slice(0, 2).toUpperCase();
      if (nameEl) nameEl.innerText = currentUsername;

      if (scheduleState[currentDayName]) {
        activeScheduleDay = currentDayName;
      } else {
        activeScheduleDay = 'Monday';
      }
      selectScheduleDay(activeScheduleDay);
      populateLinkCards();
      renderTasks();
      renderGradeCards();
      renderAiFeed();
    }
    // ================== END LOCAL ACCOUNT SYSTEM ==================

    // RENDER TASKS IN KANBAN & TO-DO PANEL
    function renderTasks() {
      const highCol = document.getElementById('col-high');
      const medCol = document.getElementById('col-med');
      const lowCol = document.getElementById('col-low');

      highCol.innerHTML = '';
      medCol.innerHTML = '';
      lowCol.innerHTML = '';

      const filtered = tasksState.filter(t => t.category === currentTaskFilter);

      let hCount = 0, mCount = 0, lCount = 0;

      filtered.forEach(task => {
        const cardHTML = `
          <div class="task-card bg-white dark:bg-[#2a1613] p-4 rounded-xl shadow-sm border border-red-100 dark:border-red-900/40 cursor-grab active:cursor-grabbing hover:shadow-md transform hover:scale-[1.02] transition-all relative group" data-id="${task.id}">
            <div class="flex justify-between items-start">
              <span class="text-[10px] font-bold text-brand-800 dark:text-brand-200 bg-brand-50 dark:bg-brand-900/60 px-2 py-0.5 rounded-full uppercase truncate max-w-[140px]">${task.subject}</span>
              <button onclick="deleteTask(${task.id})" class="text-gray-300 dark:text-gray-600 hover:text-rose-500 dark:hover:text-rose-400 transition-colors p-1" title="Delete Task">
                <i class="fa-solid fa-trash-can text-xs"></i>
              </button>
            </div>
            <h4 class="font-semibold text-sm text-gray-800 dark:text-red-100 mt-2">${task.title}</h4>
            <div class="flex items-center justify-between text-xs text-gray-400 dark:text-red-400/60 mt-3 pt-2 border-t border-gray-100 dark:border-red-900/40">
              <span><i class="fa-regular fa-clock mr-1"></i>${task.dueDate || 'Upcoming'}</span>
              <i class="fa-solid fa-grip-vertical text-gray-300"></i>
            </div>
          </div>
        `;

        if (task.priority === 'high') {
          highCol.innerHTML += cardHTML;
          hCount++;
        } else if (task.priority === 'med') {
          medCol.innerHTML += cardHTML;
          mCount++;
        } else {
          lowCol.innerHTML += cardHTML;
          lCount++;
        }
      });

      document.getElementById('count-high').innerText = hCount;
      document.getElementById('count-med').innerText = mCount;
      document.getElementById('count-low').innerText = lCount;

      // Render Dedicated To-Do Panel List
      const todoListContainer = document.getElementById('todo-full-list');
      if (todoListContainer) {
        if (tasksState.length === 0) {
          todoListContainer.innerHTML = `<div class="p-8 text-center text-gray-400 font-medium">No tasks found. Add a task above or through the AI assistant!</div>`;
        } else {
          todoListContainer.innerHTML = tasksState.map(task => {
            const prioBadge = task.priority === 'high' 
              ? '<span class="bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">High Priority</span>'
              : task.priority === 'med'
              ? '<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">Med Priority</span>'
              : '<span class="bg-red-100 text-brand-800 dark:bg-red-900/40 dark:text-red-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">Low Priority</span>';

            return `
              <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-red-950/40 rounded-2xl border border-red-100 dark:border-red-900/30 hover:shadow-md transition-all">
                <div class="flex items-center space-x-3">
                  <button onclick="deleteTask(${task.id})" class="w-6 h-6 rounded-lg border border-red-300 dark:border-red-700 flex items-center justify-center text-transparent hover:text-red-600 hover:border-red-600 transition-all shrink-0" title="Mark Complete">
                    <i class="fa-solid fa-check text-xs"></i>
                  </button>
                  <div>
                    <h4 class="font-bold text-sm text-gray-800 dark:text-red-100">${task.title}</h4>
                    <p class="text-xs text-gray-400 dark:text-red-400/60 mt-0.5">${task.subject} • <i class="fa-regular fa-clock"></i> ${task.dueDate || 'No Date'} • <span class="capitalize">${task.category}</span></p>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  ${prioBadge}
                  <button onclick="deleteTask(${task.id})" class="text-gray-400 hover:text-rose-500 dark:hover:text-rose-400 p-2 transition-colors" title="Delete task">
                    <i class="fa-solid fa-trash-can text-sm"></i>
                  </button>
                </div>
              </div>
            `;
          }).join('');
        }
      }
    }

    function toggleQuickTaskForm() {
      document.getElementById('quick-task-bar').classList.toggle('hidden');
    }

    function submitQuickTask() {
      const title = document.getElementById('q-task-title').value.trim();
      const subject = document.getElementById('q-task-subject').value.trim() || 'General';
      const priority = document.getElementById('q-task-prio').value;
      const dueDate = document.getElementById('q-task-date').value.trim() || 'Upcoming';

      if (!title) return;

      tasksState.push({
        id: Date.now(),
        title,
        subject,
        priority,
        category: currentTaskFilter,
        dueDate
      });

      document.getElementById('q-task-title').value = '';
      document.getElementById('q-task-subject').value = '';
      document.getElementById('q-task-date').value = '';
      toggleQuickTaskForm();
      renderTasks();
      saveTasksState();
    }

    function addNewTaskManual(e) {
      e.preventDefault();
      const title = document.getElementById('todo-title').value.trim();
      const subject = document.getElementById('todo-subject').value.trim();
      const priority = document.getElementById('todo-priority').value;
      const category = document.getElementById('todo-category').value;
      const dueDate = document.getElementById('todo-date').value.trim() || 'Upcoming';

      if (!title) return;

      tasksState.push({
        id: Date.now(),
        title,
        subject,
        priority,
        category,
        dueDate
      });

      document.getElementById('todo-title').value = '';
      document.getElementById('todo-subject').value = '';
      document.getElementById('todo-date').value = '';
      renderTasks();
      saveTasksState();
    }

    function deleteTask(id) {
      tasksState = tasksState.filter(t => t.id !== id);
      renderTasks();
      saveTasksState();
    }

    function filterTasks(type) {
      currentTaskFilter = type;
      const tabAcad = document.getElementById('tab-acad');
      const tabPers = document.getElementById('tab-pers');
      if(type === 'academic') {
        tabAcad.className = "px-3 py-1 rounded-lg bg-white dark:bg-red-800 shadow-sm text-brand-800 dark:text-white transition-all transform hover:scale-[1.05]";
        tabPers.className = "px-3 py-1 rounded-lg text-gray-500 dark:text-red-300/60 hover:text-gray-800 transition-all transform hover:scale-[1.05]";
      } else {
        tabPers.className = "px-3 py-1 rounded-lg bg-white dark:bg-red-800 shadow-sm text-brand-800 dark:text-white transition-all transform hover:scale-[1.05]";
        tabAcad.className = "px-3 py-1 rounded-lg text-gray-500 dark:text-red-300/60 hover:text-gray-800 transition-all transform hover:scale-[1.05]";
      }
      renderTasks();
    }

    // ===================== GEMINI ASSISTANT (REAL API, CLIENT-SIDE) =====================
    const GEMINI_MODEL = 'gemini-3.6-flash';

    // Pre-filled so it works immediately — still stored per-account in this
    // browser's storage, and can be overridden via the key icon any time.
    const BUILT_IN_GEMINI_API_KEY = 'AQ.Ab8RN6JIDK7okfyVzcahJB_DB-kToqLrfaGs1W2240-j47m5bA';

    const GEMINI_SYSTEM_PROMPT = `You are the assistant embedded in a personal productivity web app called Academix Hub. The user may just want to chat, or may want you to add or delete something in the app. You have access to the recent conversation history, so you can resolve follow-ups like "delete that one" or "actually make it high priority" using earlier context. Respond ONLY with a single raw JSON object — no markdown code fences, no extra commentary — matching exactly this schema:
{
  "action": "add_task" | "add_class" | "add_note" | "add_meet" | "add_chat" | "delete_task" | "delete_class" | "delete_note" | "delete_meet" | "delete_chat" | "delete_subject" | "none",
  "data": { ...fields depending on action, omit entirely if action is "none"... },
  "reply": "a short, friendly natural-language reply to show the user"
}

Field shapes per action:
- add_task: { "title": string, "subject": string, "priority": "high"|"med"|"low", "category": "academic"|"personal", "dueDate": string }
- add_class: { "day": "Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday", "code": string, "title": string, "time": string, "room": string, "type": "lecture"|"lab"|"online"|"break" }
- add_note: { "subject": string, "url": string }
- add_meet: { "subject": string, "url": string }
- add_chat: { "subject": string, "url": string }
- delete_task: { "match": string } — a word or phrase from the task's title or subject to find it by
- delete_class: { "day": optional "Monday".."Saturday" if known, "match": string } — a word or phrase from the class code or title
- delete_note: { "match": string } — a word or phrase from the note's subject
- delete_meet: { "match": string } — a word or phrase from the meet link's subject
- delete_chat: { "match": string } — a word or phrase from the group chat's subject
- delete_subject: { "match": string } — a word or phrase from the grade subject's name
- none: omit "data" entirely, just chat normally in "reply"

Only use an add_*/delete_* action when the user is clearly asking you to add, create, schedule, remove, or delete something for the app. Otherwise use "none" and just have a normal conversation in "reply". Always fill in every field for the chosen action — infer sensible values for anything the user didn't specify.`;

    function escapeHtml(str) {
      const div = document.createElement('div');
      div.innerText = str == null ? '' : String(str);
      return div.innerHTML;
    }

    function getGeminiKeyStorageKey() {
      return getUserKey('geminiApiKey');
    }

    async function getStoredGeminiKey() {
      const key = await persistLoad(getGeminiKeyStorageKey());
      return (typeof key === 'string' && key.trim()) ? key.trim() : null;
    }

    async function promptForGeminiKey() {
      const entered = window.prompt("Enter your Gemini API key (from Google AI Studio: aistudio.google.com/apikey).\nIt's saved only in this browser and sent directly to Google's API — never to any server of ours.");
      if (entered && entered.trim()) {
        const key = entered.trim();
        await persistSave(getGeminiKeyStorageKey(), key);
        return key;
      }
      return null;
    }

    async function ensureGeminiKey() {
      let key = await getStoredGeminiKey();
      if (!key) {
        key = BUILT_IN_GEMINI_API_KEY;
        await persistSave(getGeminiKeyStorageKey(), key);
      }
      return key;
    }

    async function changeGeminiKey() {
      await promptForGeminiKey();
    }

    // `contents` is the running conversation as an array of
    // { role: 'user' | 'model', parts: [{ text }] } — Gemini uses this to
    // stay coherent across turns (e.g. "delete that one" referring back).
    async function callGeminiAPI(apiKey, contents) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`;
      const body = {
        contents,
        systemInstruction: { parts: [{ text: GEMINI_SYSTEM_PROMPT }] }
      };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        let detail = '';
        try { detail = (await res.json())?.error?.message || ''; } catch (e) { /* ignore */ }
        throw new Error(detail || `HTTP ${res.status}`);
      }

      const json = await res.json();
      return json?.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('') || '';
    }

    function parseAiResponse(rawText) {
      let cleaned = (rawText || '').trim();
      cleaned = cleaned.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/```\s*$/, '').trim();
      try {
        const parsed = JSON.parse(cleaned);
        if (parsed && typeof parsed === 'object' && typeof parsed.reply === 'string') return parsed;
      } catch (err) {
        // Not valid JSON — fall back to treating the raw text as a plain reply.
      }
      return { action: 'none', reply: cleaned || "Sorry, I didn't catch that." };
    }

    // Executes an add_*/delete_* action against local app state and returns
    // a short confirmation string, or null if there was nothing to do.
    function performAiAction(action, data) {
      data = data || {};
      switch (action) {
        case 'add_task': {
          const title = data.title || 'Untitled Task';
          const subject = data.subject || 'General';
          const priority = ['high', 'med', 'low'].includes(data.priority) ? data.priority : 'med';
          const category = ['academic', 'personal'].includes(data.category) ? data.category : 'academic';
          const dueDate = data.dueDate || 'Upcoming';
          tasksState.push({ id: Date.now(), title, subject, priority, category, dueDate });
          renderTasks();
          saveTasksState();
          return `Added task "${title}"`;
        }
        case 'add_class': {
          const day = (data.day && scheduleState.hasOwnProperty(data.day)) ? data.day : activeScheduleDay;
          const type = ['lecture', 'lab', 'online', 'break'].includes(data.type) ? data.type : 'lecture';
          const item = { id: Date.now(), time: data.time || 'TBA', code: data.code || 'Untitled', title: data.title || 'Untitled Class', room: data.room || 'TBA', type };
          if (!scheduleState[day]) scheduleState[day] = [];
          scheduleState[day].push(item);
          if (day === activeScheduleDay) renderSchedule();
          saveScheduleState();
          return `Added class "${item.title}" to ${day}`;
        }
        case 'add_note': {
          const subject = data.subject || 'Untitled';
          notesState.push({ id: Date.now(), subject, url: data.url || '#' });
          populateLinkCards();
          saveNotesState();
          return `Added note "${subject}"`;
        }
        case 'add_meet': {
          const subject = data.subject || 'Untitled';
          meetsState.push({ id: Date.now(), subject, url: data.url || '#' });
          populateLinkCards();
          saveMeetsState();
          return `Added Meet link "${subject}"`;
        }
        case 'add_chat': {
          const subject = data.subject || 'Untitled';
          chatsState.push({ id: Date.now(), subject, url: data.url || '#' });
          populateLinkCards();
          saveChatsState();
          return `Added group chat "${subject}"`;
        }
        case 'delete_task': {
          const match = (data.match || '').toLowerCase();
          const idx = tasksState.findIndex(t => t.title.toLowerCase().includes(match) || t.subject.toLowerCase().includes(match));
          if (idx === -1) return `Couldn't find a task matching "${data.match || ''}"`;
          const removed = tasksState.splice(idx, 1)[0];
          renderTasks();
          saveTasksState();
          return `Deleted task "${removed.title}"`;
        }
        case 'delete_class': {
          const match = (data.match || '').toLowerCase();
          const days = (data.day && scheduleState.hasOwnProperty(data.day)) ? [data.day] : Object.keys(scheduleState);
          for (const day of days) {
            const idx = scheduleState[day].findIndex(c => c.title.toLowerCase().includes(match) || c.code.toLowerCase().includes(match));
            if (idx !== -1) {
              const removed = scheduleState[day].splice(idx, 1)[0];
              if (day === activeScheduleDay) renderSchedule();
              saveScheduleState();
              return `Deleted class "${removed.title}" from ${day}`;
            }
          }
          return `Couldn't find a class matching "${data.match || ''}"`;
        }
        case 'delete_note': {
          const match = (data.match || '').toLowerCase();
          const idx = notesState.findIndex(n => n.subject.toLowerCase().includes(match));
          if (idx === -1) return `Couldn't find a note matching "${data.match || ''}"`;
          const removed = notesState.splice(idx, 1)[0];
          populateLinkCards();
          saveNotesState();
          return `Deleted note "${removed.subject}"`;
        }
        case 'delete_meet': {
          const match = (data.match || '').toLowerCase();
          const idx = meetsState.findIndex(m => m.subject.toLowerCase().includes(match));
          if (idx === -1) return `Couldn't find a Meet link matching "${data.match || ''}"`;
          const removed = meetsState.splice(idx, 1)[0];
          populateLinkCards();
          saveMeetsState();
          return `Deleted Meet link "${removed.subject}"`;
        }
        case 'delete_chat': {
          const match = (data.match || '').toLowerCase();
          const idx = chatsState.findIndex(c => c.subject.toLowerCase().includes(match));
          if (idx === -1) return `Couldn't find a group chat matching "${data.match || ''}"`;
          const removed = chatsState.splice(idx, 1)[0];
          populateLinkCards();
          saveChatsState();
          return `Deleted group chat "${removed.subject}"`;
        }
        case 'delete_subject': {
          const match = (data.match || '').toLowerCase();
          const idx = gradesState.findIndex(g => g.subject.toLowerCase().includes(match));
          if (idx === -1) return `Couldn't find a grade subject matching "${data.match || ''}"`;
          const removed = gradesState.splice(idx, 1)[0];
          renderGradeCards();
          saveGradesState();
          return `Deleted subject "${removed.subject}"`;
        }
        default:
          return null;
      }
    }

    // Conversation memory — persisted per user, fed back to Gemini each turn
    // so it can resolve follow-ups like "delete that one".
    let aiHistory = []; // [{ role: 'user' | 'model', text }]
    const AI_HISTORY_LIMIT = 20; // messages kept both in memory and sent per request

    async function saveAiHistory() {
      await persistSave(getUserKey('aiHistory'), aiHistory);
    }

    function renderAiFeed() {
      const feed = document.getElementById('ai-feed');
      let html = `<div class="bg-brand-50 dark:bg-red-950/60 p-3 rounded-2xl border border-brand-100 dark:border-red-900/40 text-brand-900 dark:text-red-200">👋 <b>Hi there!</b> Ask me anything, or tell me to add or delete a task, class, note, meet link, or group chat.</div>`;
      aiHistory.forEach(m => {
        if (m.role === 'user') {
          html += `<div class="bg-gray-100 dark:bg-red-900/40 p-3 rounded-2xl text-gray-700 dark:text-red-200 font-medium">${escapeHtml(m.text)}</div>`;
        } else {
          html += `<div class="bg-red-50 dark:bg-red-950/60 p-3 rounded-2xl border border-red-100 dark:border-red-900/40 text-red-900 dark:text-red-200">${escapeHtml(m.text)}</div>`;
        }
      });
      feed.innerHTML = html;
      feed.scrollTop = feed.scrollHeight;
    }

    async function processAiInput() {
      const inputEl = document.getElementById('ai-input');
      const input = inputEl.value.trim();
      if (!input) return;

      const feed = document.getElementById('ai-feed');
      feed.innerHTML += `<div class="bg-gray-100 dark:bg-red-900/40 p-3 rounded-2xl text-gray-700 dark:text-red-200 font-medium">${escapeHtml(input)}</div>`;
      inputEl.value = '';
      feed.scrollTop = feed.scrollHeight;

      aiHistory.push({ role: 'user', text: input });
      if (aiHistory.length > AI_HISTORY_LIMIT) aiHistory = aiHistory.slice(-AI_HISTORY_LIMIT);

      const apiKey = await ensureGeminiKey();
      if (!apiKey) {
        feed.innerHTML += `<div class="bg-rose-50 dark:bg-rose-950/40 p-3 rounded-2xl border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-300 text-xs">I need a Gemini API key to respond — click the key icon above to add one.</div>`;
        feed.scrollTop = feed.scrollHeight;
        return;
      }

      const thinkingId = `thinking-${Date.now()}`;
      feed.innerHTML += `<div id="${thinkingId}" class="bg-red-50 dark:bg-red-950/60 p-3 rounded-2xl border border-red-100 dark:border-red-900/40 text-red-900 dark:text-red-200 text-xs italic">Thinking…</div>`;
      feed.scrollTop = feed.scrollHeight;

      try {
        const contents = aiHistory.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
        const rawText = await callGeminiAPI(apiKey, contents);
        const parsed = parseAiResponse(rawText);

        let actionNote = '';
        if (parsed.action && parsed.action !== 'none') {
          const result = performAiAction(parsed.action, parsed.data);
          if (result) actionNote = `<div class="mt-1.5 pt-1.5 border-t border-red-200/60 dark:border-red-800/40 text-[10px] font-bold text-brand-700 dark:text-brand-300">✨ ${escapeHtml(result)}</div>`;
        }

        aiHistory.push({ role: 'model', text: parsed.reply });
        if (aiHistory.length > AI_HISTORY_LIMIT) aiHistory = aiHistory.slice(-AI_HISTORY_LIMIT);
        saveAiHistory();

        const thinkingEl = document.getElementById(thinkingId);
        if (thinkingEl) {
          thinkingEl.outerHTML = `<div class="bg-red-50 dark:bg-red-950/60 p-3 rounded-2xl border border-red-100 dark:border-red-900/40 text-red-900 dark:text-red-200">${escapeHtml(parsed.reply)}${actionNote}</div>`;
        }
      } catch (err) {
        console.error('Gemini request failed:', err);
        const thinkingEl = document.getElementById(thinkingId);
        const message = `Sorry, something went wrong talking to Gemini${err && err.message ? ' (' + err.message + ')' : ''}.`;
        if (thinkingEl) {
          thinkingEl.outerHTML = `<div class="bg-rose-50 dark:bg-rose-950/40 p-3 rounded-2xl border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-300 text-xs">${escapeHtml(message)}</div>`;
        }
      }

      feed.scrollTop = feed.scrollHeight;
    }
    // ================== END GEMINI ASSISTANT ==================


    // RENDER LINKS & GROUP CHATS
    function populateLinkCards() {
      // Notes Cards
      const notesHTML = notesState.map(doc => `
        <div class="relative group">
          <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="bg-white dark:bg-[#2a1613] p-5 rounded-2xl border border-red-100 dark:border-red-800/40 shadow-sm hover:shadow-md transform hover:scale-[1.03] transition-all block">
            <div class="flex justify-between items-start">
              <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <i class="fa-solid fa-file-word text-lg"></i>
              </div>
              <i class="fa-solid fa-arrow-up-right-from-square text-xs text-gray-300 dark:text-red-600"></i>
            </div>
            <h4 class="font-semibold text-gray-800 dark:text-red-100 mt-3 text-sm">${doc.subject}</h4>
            <p class="text-[11px] text-gray-400 dark:text-red-400/60 mt-1">Google Docs Notes</p>
          </a>
          <button onclick="deleteNote(${doc.id})" class="absolute top-2 right-2 w-6 h-6 rounded-lg bg-white/90 dark:bg-[#221310]/90 text-gray-300 dark:text-gray-600 hover:text-rose-500 dark:hover:text-rose-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" title="Delete Note">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      `).join('');
      
      const notesPreviewHTML = notesState.slice(0, 3).map(doc => `
        <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="bg-white dark:bg-[#2a1613] p-5 rounded-2xl border border-red-100 dark:border-red-800/40 shadow-sm hover:shadow-md transform hover:scale-[1.03] transition-all block">
          <div class="flex justify-between items-start">
            <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <i class="fa-solid fa-file-word text-lg"></i>
            </div>
            <i class="fa-solid fa-arrow-up-right-from-square text-xs text-gray-300 dark:text-red-600"></i>
          </div>
          <h4 class="font-semibold text-gray-800 dark:text-red-100 mt-3 text-sm">${doc.subject}</h4>
          <p class="text-[11px] text-gray-400 dark:text-red-400/60 mt-1">Google Docs Notes</p>
        </a>
      `).join('');
      document.getElementById('dashboard-notes-grid').innerHTML = notesPreviewHTML;
      document.getElementById('full-notes-grid').innerHTML = notesHTML;
      const notesCountEl = document.getElementById('notes-total-count');
      if (notesCountEl) notesCountEl.innerText = notesState.length;

      // Meet Cards
      const meetsHTML = meetsState.map(meet => `
        <div class="relative group flex items-center">
          <a href="${meet.url}" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-between p-3.5 rounded-xl bg-red-50/60 dark:bg-red-950/40 hover:bg-red-100/80 dark:hover:bg-red-900/60 transition-all text-sm font-medium text-red-900 dark:text-red-100 border border-red-100/50 dark:border-red-900/30">
            <div class="flex items-center space-x-3 truncate">
              <i class="fa-solid fa-camera-retro text-red-600 dark:text-red-400"></i>
              <span class="truncate">${meet.subject}</span>
            </div>
            <i class="fa-solid fa-external-link text-xs opacity-60"></i>
          </a>
          <button onclick="deleteMeet(${meet.id})" class="ml-2 w-6 h-6 shrink-0 rounded-lg text-gray-300 dark:text-gray-600 hover:text-rose-500 dark:hover:text-rose-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" title="Delete Link">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      `).join('');

      document.getElementById('dashboard-meets-list').innerHTML = meetsHTML;
      document.getElementById('full-meets-grid').innerHTML = meetsHTML;

      // Group Chat Cards
      const chatsHTML = chatsState.map(chat => `
        <div class="relative group flex items-center">
          <a href="${chat.url}" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-between p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 hover:bg-blue-100/80 dark:hover:bg-blue-900/40 transition-all text-sm font-medium text-blue-900 dark:text-blue-200 border border-blue-100/50 dark:border-blue-900/30">
            <div class="flex items-center space-x-3 truncate">
              <i class="fa-brands fa-facebook-messenger text-blue-600 dark:text-blue-400"></i>
              <span class="truncate">${chat.subject}</span>
            </div>
            <i class="fa-solid fa-external-link text-xs opacity-60"></i>
          </a>
          <button onclick="deleteChat(${chat.id})" class="ml-2 w-6 h-6 shrink-0 rounded-lg text-gray-300 dark:text-gray-600 hover:text-rose-500 dark:hover:text-rose-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" title="Delete Chat">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      `).join('');

      document.getElementById('dashboard-chats-list').innerHTML = chatsHTML;
      document.getElementById('full-chats-grid').innerHTML = chatsHTML;
    }

    // NOTES CRUD
    function toggleQuickNoteForm() {
      document.getElementById('quick-note-bar').classList.toggle('hidden');
    }

    function submitQuickNote() {
      const subject = document.getElementById('c-note-subject').value.trim();
      const url = document.getElementById('c-note-url').value.trim() || '#';
      if (!subject) return;
      notesState.push({ id: Date.now(), subject, url });
      document.getElementById('c-note-subject').value = '';
      document.getElementById('c-note-url').value = '';
      toggleQuickNoteForm();
      populateLinkCards();
      saveNotesState();
    }

    function deleteNote(id) {
      notesState = notesState.filter(n => n.id !== id);
      populateLinkCards();
      saveNotesState();
    }

    // MEET LINKS CRUD
    function toggleQuickMeetForm() {
      document.getElementById('quick-meet-bar').classList.toggle('hidden');
    }

    function submitQuickMeet() {
      const subject = document.getElementById('c-meet-subject').value.trim();
      const url = document.getElementById('c-meet-url').value.trim() || '#';
      if (!subject) return;
      meetsState.push({ id: Date.now(), subject, url });
      document.getElementById('c-meet-subject').value = '';
      document.getElementById('c-meet-url').value = '';
      toggleQuickMeetForm();
      populateLinkCards();
      saveMeetsState();
    }

    function deleteMeet(id) {
      meetsState = meetsState.filter(m => m.id !== id);
      populateLinkCards();
      saveMeetsState();
    }

    // GROUP CHATS CRUD
    function toggleQuickChatForm() {
      document.getElementById('quick-chat-bar').classList.toggle('hidden');
    }

    function submitQuickChat() {
      const subject = document.getElementById('c-chat-subject').value.trim();
      const url = document.getElementById('c-chat-url').value.trim() || '#';
      if (!subject) return;
      chatsState.push({ id: Date.now(), subject, url });
      document.getElementById('c-chat-subject').value = '';
      document.getElementById('c-chat-url').value = '';
      toggleQuickChatForm();
      populateLinkCards();
      saveChatsState();
    }

    function deleteChat(id) {
      chatsState = chatsState.filter(c => c.id !== id);
      populateLinkCards();
      saveChatsState();
    }

    // DYNAMIC GRADE TRACKER RENDERER
    function renderGradeCards() {
      const container = document.getElementById('grades-cards-container');
      container.innerHTML = '';

      gradesState.forEach((course, subIdx) => {
        const csAvg = course.cs.length > 0 ? (course.cs.reduce((acc, item) => acc + item.score, 0) / course.cs.length) : 0;
        const examAvg = course.exam.length > 0 ? (course.exam.reduce((acc, item) => acc + item.score, 0) / course.exam.length) : 0;
        const finalGrade = (csAvg * 0.50) + (examAvg * 0.50);

        const card = document.createElement('div');
        card.className = "bg-white dark:bg-[#221310] p-6 rounded-3xl border border-red-100 dark:border-red-800/40 shadow-sm space-y-4 transform hover:scale-[1.01] transition-all";

        card.innerHTML = `
          <div class="flex justify-between items-center border-b border-gray-100 dark:border-red-900/40 pb-3">
            <h3 class="font-bold text-lg text-gray-900 dark:text-white">${course.subject}</h3>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 bg-brand-100 dark:bg-red-900 text-brand-900 dark:text-red-100 font-extrabold text-sm rounded-full">
                ${finalGrade.toFixed(1)}%
              </span>
              <button onclick="deleteSubject(${subIdx})" class="text-gray-300 dark:text-gray-600 hover:text-rose-500 dark:hover:text-rose-400 p-1 transition-colors" title="Delete Subject">
                <i class="fa-solid fa-trash-can text-sm"></i>
              </button>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold text-gray-600 dark:text-red-300 uppercase tracking-wider">
              <span>Class Standing (50%) • Avg: ${csAvg.toFixed(1)}%</span>
              <button onclick="addScoreItem(${subIdx}, 'cs')" class="text-brand-700 dark:text-brand-400 hover:underline flex items-center gap-1 text-xs">
                <i class="fa-solid fa-plus text-[10px]"></i> Add Activity
              </button>
            </div>
            <div class="space-y-1.5">
              ${course.cs.map(item => `
                <div class="flex items-center justify-between p-2 bg-gray-50 dark:bg-red-950/50 rounded-xl gap-2 text-xs">
                  <input type="text" value="${item.name}" onchange="updateScoreItem(${subIdx}, 'cs', ${item.id}, 'name', this.value)" class="bg-transparent text-gray-800 dark:text-red-100 font-medium w-full focus:outline-none">
                  <div class="flex items-center space-x-1 shrink-0">
                    <input type="number" value="${item.score}" onchange="updateScoreItem(${subIdx}, 'cs', ${item.id}, 'score', parseFloat(this.value) || 0)" class="w-12 p-1 border rounded-lg text-center font-bold text-brand-800 dark:bg-red-900 dark:text-white dark:border-red-700">
                    <button onclick="deleteScoreItem(${subIdx}, 'cs', ${item.id})" class="text-rose-400 hover:text-rose-600 p-1">
                      <i class="fa-solid fa-trash text-xs"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="space-y-2 pt-2 border-t border-gray-50 dark:border-red-900/20">
            <div class="flex justify-between items-center text-xs font-bold text-gray-600 dark:text-red-300 uppercase tracking-wider">
              <span>Exams (50%) • Avg: ${examAvg.toFixed(1)}%</span>
              <button onclick="addScoreItem(${subIdx}, 'exam')" class="text-brand-700 dark:text-brand-400 hover:underline flex items-center gap-1 text-xs">
                <i class="fa-solid fa-plus text-[10px]"></i> Add Exam
              </button>
            </div>
            <div class="space-y-1.5">
              ${course.exam.map(item => `
                <div class="flex items-center justify-between p-2 bg-gray-50 dark:bg-red-950/50 rounded-xl gap-2 text-xs">
                  <input type="text" value="${item.name}" onchange="updateScoreItem(${subIdx}, 'exam', ${item.id}, 'name', this.value)" class="bg-transparent text-gray-800 dark:text-red-100 font-medium w-full focus:outline-none">
                  <div class="flex items-center space-x-1 shrink-0">
                    <input type="number" value="${item.score}" onchange="updateScoreItem(${subIdx}, 'exam', ${item.id}, 'score', parseFloat(this.value) || 0)" class="w-12 p-1 border rounded-lg text-center font-bold text-brand-800 dark:bg-red-900 dark:text-white dark:border-red-700">
                    <button onclick="deleteScoreItem(${subIdx}, 'exam', ${item.id})" class="text-rose-400 hover:text-rose-600 p-1">
                      <i class="fa-solid fa-trash text-xs"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;

        container.appendChild(card);
      });
    }

    // SCORE MANIPULATION FUNCTIONS
    function addScoreItem(subIdx, category) {
      gradesState[subIdx][category].push({ id: Date.now(), name: category === 'cs' ? 'New Activity' : 'New Exam', score: 90 });
      renderGradeCards();
      saveGradesState();
    }

    function updateScoreItem(subIdx, category, itemId, field, value) {
      const item = gradesState[subIdx][category].find(i => i.id === itemId);
      if (item) {
        item[field] = value;
        renderGradeCards();
        saveGradesState();
      }
    }

    function deleteScoreItem(subIdx, category, itemId) {
      gradesState[subIdx][category] = gradesState[subIdx][category].filter(i => i.id !== itemId);
      renderGradeCards();
      saveGradesState();
    }

    // SUBJECT (COURSE) MANIPULATION FUNCTIONS
    function toggleQuickSubjectForm() {
      document.getElementById('quick-subject-bar').classList.toggle('hidden');
    }

    function submitQuickSubject() {
      const name = document.getElementById('c-subject-name').value.trim();
      if (!name) return;
      gradesState.push({ subject: name, cs: [], exam: [] });
      document.getElementById('c-subject-name').value = '';
      toggleQuickSubjectForm();
      renderGradeCards();
      saveGradesState();
    }

    function deleteSubject(subIdx) {
      gradesState.splice(subIdx, 1);
      renderGradeCards();
      saveGradesState();
    }

    // UTILITY FUNCTIONS
    function toggleDarkMode() { document.documentElement.classList.toggle('dark'); }
    function toggleSidebar() { document.getElementById('sidebar').classList.toggle('hidden'); }
    function capitalizeWords(str) { return str.replace(/\b\w/g, l => l.toUpperCase()); }

    function toggleAiPanel() {
      const panel = document.getElementById('ai-panel');
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;

      if (isDesktop) {
        if (panel.classList.contains('w-0')) {
          panel.classList.remove('w-0', 'p-0', 'overflow-hidden', 'opacity-0');
          panel.classList.add('w-full', 'md:w-80');
        } else {
          panel.classList.add('w-0', 'p-0', 'overflow-hidden', 'opacity-0');
          panel.classList.remove('w-full', 'md:w-80');
        }
      } else {
        panel.classList.toggle('hidden');
      }
    }

    function switchTab(tabName) {
      document.querySelectorAll('.view-panel').forEach(panel => panel.classList.add('hidden'));
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-brand-800', 'text-white', 'shadow-md');
        btn.classList.add('text-gray-600', 'dark:text-red-200/80');
      });

      const activeView = document.getElementById(`view-${tabName}`);
      const activeNav = document.getElementById(`nav-${tabName}`);
      
      if (activeView) activeView.classList.remove('hidden');
      if (activeNav) {
        activeNav.classList.add('bg-brand-800', 'text-white', 'shadow-md');
        activeNav.classList.remove('text-gray-600', 'dark:text-red-200/80');
      }
    }

    // KANBAN DRAG AND DROP
    ['col-high', 'col-med', 'col-low'].forEach(colId => {
      new Sortable(document.getElementById(colId), {
        group: 'kanban',
        animation: 150,
        ghostClass: 'bg-brand-50'
      });
    });

    // DISPLAY TODAY'S DATE & AUTO SET SCHEDULE DAY
    const today = new Date();
    document.getElementById('current-date').innerText = today.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayName = daysOfWeek[today.getDay()];

    // INITIAL SETUP — ensure demo account exists, then either restore a
    // logged-in session or leave the auth screen showing.
    (async function init() {
      setAuthMode('login');
      await ensureDemoAccount();

      const savedSession = await persistLoad(SESSION_KEY);
      if (savedSession) {
        const accounts = await loadAccounts();
        if (accounts.hasOwnProperty(savedSession)) {
          await logInAs(savedSession);
          return;
        }
      }
      // No valid session — auth-overlay stays visible, app-shell stays hidden.
    })();
