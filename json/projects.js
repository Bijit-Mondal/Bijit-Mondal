// All Projects Data Object ****************************************************

let projectsData = [
    {
        id: 1,
        name: "Suspensians",
        details: "A One in All Destination for Story Lovers",
        imgsrc: "./img/projects/icon1.png",
        preview: "https://suspensians.netlify.app/",
        code: "https://github.com/Bijit-Mondal/Suspensian",
        feedback: "Feedback_on_Suspensians",
        icon: "bx-show",
    },
    {
        id: 2,
        name: "iLib RKMVCC",
        details: "Official Library Management System of RKMVCC",
        imgsrc: "./img/projects/icon2.png",
        preview: "https://ilib.netlify.app/",
        code: "https://github.com/Bijit-Mondal/iLib",
        feedback: "Feedback_on_iLib",
        icon: "bx-show",
    },
    {
        id: 3,
        name: "DetectUrMind",
        details: "Guess a Integer Number Between 1-99??",
        imgsrc: "./img/projects/icon3.png",
        preview: "https://detecturmind.netlify.app/",
        code: "https://github.com/Bijit-Mondal/mind_detector",
        feedback: "Feedback_on_Detecturmind",
        icon: "bx-show",
    },
    {
	id: 4,
        name: "Grabber",
        details: "Guess what.. Youtube ... Go ahead and see",
        imgsrc: "./img/projects/icon4.png",
        preview: "http://grabberutube.glitch.me/",
        code: "https://github.com/Bijit-Mondal/grabber-mini",
        feedback: "Feedback_on_Grabber",
        icon: "bx-show",
    },
];

// All Projects Preview Mapping ****************************************************

let projectsContent = document.querySelector(".projects-wrapper");

Object.values(projectsData).map((val) => {
    projectsContent.innerHTML += `
        <!-- Project ${val.id} -->
        <div class="projects-cards col-xl-3 col-lg-4 col-md-5 col-sm-8 col-12">
			<img src="${val.imgsrc}" />
			<h4>${val.name}</h4>
			<p>${val.details}</p>

			<span class="preview-links">
                <a href="${val.preview}"><i class="bx ${val.icon}"></i></a>
                <a href="${val.code}"><i class="bx bx-code-alt"></i></a>
                <a href="mailto:bijitmondalrkmvcc@gmail.com?subject=${val.feedback}"><i class="bx bxs-edit"></i></a>
            </span>
        </div>
    `;
});
