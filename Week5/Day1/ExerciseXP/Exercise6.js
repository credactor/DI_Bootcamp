// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (number_of_children, partners_name, geographic_location, job_title) {
  par = document.getElementsByTagName("p")[0];
  par.textContent = `You will be a ${job_title} in ${geographic_location}, and married to ${partners_name} with ${number_of_children} kids.`;
  })(3, "Mary", "Paris", "broker");