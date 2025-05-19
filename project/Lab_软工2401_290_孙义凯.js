// 模拟学生名单 - 实际使用时可以替换为真实名单
const students = [
    '张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十',
    '郑十一', '王十二', '冯十三', '陈十四', '褚十五', '卫十六',
    '蒋十七', '沈十八', '韩十九', '杨二十', '朱二十一', '秦二十二'
];

// 获取DOM元素
const displayArea = document.getElementById('displayArea');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const studentList = document.getElementById('studentList');
const selectedStudent = document.getElementById('selectedStudent');

// 初始化学生名单
function initStudentList() {
    studentList.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        studentList.appendChild(li);
    });
}

// 随机选择学生
let timer;
let isRunning = false;

function startRandomSelection() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    selectedStudent.textContent = '';
    
    timer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * students.length);
        displayArea.textContent = students[randomIndex];
    }, 100);
}

function stopRandomSelection() {
    if (!isRunning) return;
    
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    const selected = displayArea.textContent;
    selectedStudent.textContent = selected;
    
    // 高亮显示被选中的学生
    const allStudents = studentList.querySelectorAll('li');
    allStudents.forEach(student => {
        student.style.color = student.textContent === selected ? 'red' : 'black';
        student.style.fontWeight = student.textContent === selected ? 'bold' : 'normal';
    });
}

// 事件监听
startBtn.addEventListener('click', startRandomSelection);
stopBtn.addEventListener('click', stopRandomSelection);

// 初始化
initStudentList();