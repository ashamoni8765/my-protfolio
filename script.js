function loadProject(){
    fetch('portfolio.json')
    .then(res => res.json())
    .then(data => displayProject(data))
}
loadProject();

function displayProject(data) {
    const container = document.getElementById('skills-container')

    for(const project of data){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="skill">
        <img src="${project.images}" alt="" style="width: 30%;">
        <h3 class="skill-title">React</h3>
        <p class="skill-description">Hello,I am a Asha Moni,i am a web developer with 3 years of experience in HTML,CSS,Figma to html,JavaScript Bootstrap developer.I am always delivery project on time. I always give 100% errornt to satisfy my clients.I love my work.i am a full time freelancer,so you can massage me at any time..</p>
    </div>  
        `;
        container.appendChild(div);
    }
}
