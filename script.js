
document.addEventListener('DOMContentLoaded', (event) => {
    
    const myLink = document.getElementById('myLink');
   
    const targetText = document.getElementById('targetText');

    myLink.addEventListener('click', function(e) {
        e.preventDefault();
        targetText.textContent = 'The text has been changed!';
        this.textContent = 'Link clicked!';
    });
});

Object.assign(myParagraph.style, styles);

const uploadInput = document.getElementById('audioUpload');
const player = document.getElementById('audioPlayer');

uploadInput.addEventListener('change', function() {
    
    const file = this.files[0];

    if (file) {
        const fileURL = URL.createObjectURL(file);
        player.src = fileURL;

        player.onend = () => URL.revokeObjectURL(fileURL);
    }
});

<script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.0/dist/email.min.js">
</script>
<script type="text/javascript">
  (function() {
    emailjs.init("service_x3jj8ck");
  })();
 var templateParams = {
    to_name: '{name}',
    from_name: 'Jacqueline',
    message_html: 'Please see the attached file'
  };

emailjs.send('service_x3jj8ck', 'template_4mxbvz5', templateParams)
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });

emailjs
.send(SERVICE_ID, TEMPLATE_ID, {
    to_email : "actonitwithhelp@live.com",
    name: "Jacqueline"
 }, {
  publicKey: js7fwwmg017aLwtAa,
  privateKey: S5r_cvrHqsijU6twVTRfA,
})
.then(
  (response) => {
    console.log("Email SUCCESS!", response.status, response.text);
  },
  (err) => {
    console.log("Email FAILED...", err);
  }
);

</script>
