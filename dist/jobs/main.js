const renderer = new Renderer()
const jobsManager = new JobsManager()

document.ready(async function() {
    await jobsManager.getJobs()
    renderer.renderJobs(jobsManager.jobs)
})