const projects = {
    maidmayhem: {
        title: "Maid Mayhem",
        image: "assets/img/portfolio/maidmayhem.png",
        link: "https://www.instagram.com/patchdup_games/",
        description: "lolol",
        tech: ["Unity Physics Engine", "Event driven codebase", "Local Multiplayer", "Code refactoring to meet standards"]
    },
    porcelain: {
        title: "Porcelain",
        image: "assets/img/portfolio/porcelain.png",
        link: "https://burnzyhq.itch.io/porcelain",
        description: "Porcelain is a 3D stealth-based horror game where you play as a little doll trying to traverse through a tall, towering, scary mansion filled with evil spirits to reclaim her memories.",
        tech: ["Unity animation trees", "GitHub version control", "Project management & risk analysis"]
    },
    networkedslime: {
        title: "Networked Slime",
        image: "assets/img/portfolio/networkedslime.png",
        description: "A networked game utilizing Unity Netcode for GameObjects.",
        tech: ["Netcode", "Client-Server interactions", "PHP & SQL"]
    }
}

const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");
const project = projects[projectId]

if (project) {
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;
    document.getElementById("project-image").src = project.image;

    const techList = document.getElementById("project-tech");
    project.tech.forEach(t => {
        const li = document.createElement("li");
        li.textContent = t;
        techList.appendChild(li);
    });

    const linkContainer = document.getElementById("project-link");
    linkContainer.innerHTML = "";

    if(project.link){
        const a = document.createElement("a");
        a.href = project.link;
        a.target = "_blank"; 
        a.textContent = project.link;
        //a.className = "btn btn-primary mt-3";
        linkContainer.appendChild(a);
    } else {
        linkContainer.style.display = "none";
    }
    } else {
    document.getElementById("project-title").textContent = "Project Not Found";
}
