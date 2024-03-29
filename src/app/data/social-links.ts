export class SocialLink {
  alt: string;
  destPath: string;
  imgPath: string;
}

const youtubeLink = new SocialLink();
youtubeLink.alt = 'YouTube';
youtubeLink.destPath = 'https://www.youtube.com/c/roqbinreality';
youtubeLink.imgPath = '/assets/images/youtubeLogoRed.png';

const linkedinLink = new SocialLink();
linkedinLink.alt = 'LinkedIn';
linkedinLink.destPath = 'https://www.linkedin.com/in/robert-hosler-885074106/';
linkedinLink.imgPath = '/assets/images/linkedinLogo.png';

const facebookLink = new SocialLink();
facebookLink.alt = 'Facebook';
facebookLink.destPath = 'https://www.facebook.com/roqbthepirate/';
facebookLink.imgPath = '/assets/images/facebookLogo.png';

const spFacebookLink = new SocialLink();
spFacebookLink.alt = 'Facebook';
spFacebookLink.destPath = 'https://www.facebook.com/SubjectivePersonality/';
spFacebookLink.imgPath = '/assets/images/facebookLogo.png';

const discordLink = new SocialLink();
discordLink.alt = 'Discord';
discordLink.destPath = 'https://www.discordapp.com/users/495057201006772244';
discordLink.imgPath = '/assets/images/discordLogo.svg';

const githubLink = new SocialLink();
githubLink.alt = 'GitHub';
githubLink.destPath = 'https://github.com/RobertHosler';
githubLink.imgPath = '/assets/images/githubDarkLogo.png';

const tiktokLink = new SocialLink();
tiktokLink.alt = 'TikTok';
tiktokLink.destPath = 'https://vm.tiktok.com/ZMdqy25sL/';
tiktokLink.imgPath = '/assets/images/tiktokLogo.svg';

const instagramLink = new SocialLink();
instagramLink.alt = 'Instagram';
instagramLink.destPath = 'https://www.instagram.com/roqb.me/';
instagramLink.imgPath = '/assets/images/instagramLogo.png';

const spTwitterLink = new SocialLink();
spTwitterLink.alt = 'Twitter';
spTwitterLink.destPath = 'https://twitter.com/SubjectivePBlog/';
spTwitterLink.imgPath = '/assets/images/twitterLogoBlue.svg';

const twitterLink = new SocialLink();
twitterLink.alt = 'Twitter';
twitterLink.destPath = 'https://twitter.com/RoqbThePirate/';
twitterLink.imgPath = '/assets/images/twitterLogoBlue.svg';

const gmailLink = new SocialLink();
gmailLink.alt = 'Email';
gmailLink.destPath = 'mailto:rph731@gmail.com';
gmailLink.imgPath = '/assets/images/gmail.png';

const spLink = new SocialLink();
spLink.alt = 'Subjective Personality Blog';
spLink.destPath = 'http://subjectivepersonality.wordpress.com/';
spLink.imgPath = '/assets/images/sp-logo.png';

export const social = {
  youtube: youtubeLink,
  github: githubLink,
  twitter: twitterLink,
  instagram: instagramLink,
  tiktok: tiktokLink,
  discord: discordLink,
  linkedin: linkedinLink,
  facebook: facebookLink,
  spFacebook: spFacebookLink,
  gmail: gmailLink,
  links: [
    youtubeLink,
    githubLink,
    twitterLink,
    instagramLink,
    tiktokLink,
    discordLink,
    linkedinLink,
    facebookLink,
  ],
  pro: [
    linkedinLink,
    githubLink,
    gmailLink,
  ],
  personal: [
    facebookLink,
    twitterLink,
    instagramLink,
    tiktokLink,
    youtubeLink,
    githubLink,
    discordLink,
    gmailLink
  ],
  spLinks: [
    spLink,
    spFacebookLink,
    spTwitterLink
  ]
};
