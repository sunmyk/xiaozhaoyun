// 模拟学生名单 - 实际使用时可以替换为真实名单
const students = [
    '1_白林涵','2_陈昊妍','3_董萌萌','4_范昱涵','5_高一涵','6_郭超','7_侯宪坤','8_黄博','9_姜子超','10_鞠忠宏',
	'11_李茂川','12_李永乐','13_李云','14_林家祺','15_吕君蕊','16_秦金龙','17_秦士凇','18_孙家豪','19_孙若冰','20_孙义凯',
	'21_孙子凌','22_索京奥','23_王朝文','24_王俊豪','25_王梦月','26_王文昌','27_王运旺','28_王祉盛','29_卫学振','30_武启航',
	'31_徐浩文','32_许广洋','33_许源赫','34_薛景文','35_张丁文','36_张静','37_张俊飞','38_张艳可','39_张云翔','40_张志恒',
	'41_赵宝华','42_赵家豪','43_周政涟','44_邹谦慧'
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