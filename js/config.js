/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",

];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "jATVgJ_grys", name: "Nations - Installation Music"},
	{youtube: "aEEUvoDKY2w", name: "Nations - Installation Music"},
        {youtube: "aK4JSwhdcdE", name: "Nations - Installation Music"},
        {youtube: "FslbUV7Atdc", name: "Nations - Installation Music"},
        {youtube: "iG9Islm9BdI", name: "Nations - Installation Music"},
        {youtube: "SuViQeyFp7I", name: "Nations - Installation Music"},
        {youtube: "Htaj3o3JD8I", name: "Nations - Installation Music"},
        {youtube: "qDQxUWRDtU0", name: "Nations - Installation Music"},

];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Do not use your microphone to: disrupt roleplay situations by spamming unnecessary phrases, such as my man; or play music, recorded, live, vocal, or instrumental!",
	"Do not joke about crashing the server. Doing so will result in a permanent ban!",
	"Mingeing In This Server Will Result In A Perma Ban!",
        "Do not exploit around the set AFK system that kicks anyone who is attempting to grind for XP!",
        "Please DO Not Mic/Spam Your Mic!",
        "No-Meta-Gaming!",
        "Do NOT threaten to DDoS the server - This will result in a perma ban, joke or not!", 
        "Mingeing Is Unacceptable Behavior And You Will Be Permanently Banned!",
        "Do Not Ask For Ranks Apply On The Forums!",
        "Students should never kill other students, teachers, Aurors, or OOTP intentionally. Accidents do happen or may be a result of crossfire, but avoid these at all costs!",
        "Passive roleplay; you may only Owlpost your passive roleplay if you are on an acceptable job and not just to communicate globally in RP!",
        "The Hufflepuff Basement requires tapping a specific barrel in a particular rhythm. Attempts to bypass these protective measures by members of other houses are considered serious offences!",
        "Prefects may enter faculty areas if investigating another student violating this rule!",
        "No being an Animagus, Parseltongue  or Metamorphmagi without permisson!",
        "Do not make extremely loud sounds with your microphone or repeatedly broadcasting for an extended period of time!",
        "Do not enter the Forbidden Forest without staff supervision. If you want a scene in the forest, put in a +request (and understand that there is a very good chance that your character will not survive!",
        "Boys may not enter the girls' dormitories. Attempts to do so will trigger spells preventing it, such as a Slide Spell on the staircases in the Gryffindor and Ravenclaw rooms. The one exception to this is a male Prefect in an emergency.!",
        "Access to common rooms and dormitories is strictly controlled!",
        "Do not attempt to clip or exploit outside of the set map boundaries. Bugs may be hidden and it may be an accident, but intentionally doing so or sharing is prohibited!",
        "Users should not specifically target or harass another player with malicious intentions!",
        "Do not take part in any action that would immediately break the conventions of your roleplay job. Examples can be found within the job description!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
