export interface ITwitterData {
  profilePhoto: string;
  name: string;
  userName: string;
  biographies: string;
  verified: boolean;
  following: number;
  followers: number;
  follow: boolean;
}

export const twitterData = [
  {
    profilePhoto: 'https://avatars.githubusercontent.com/u/1561955?v=4',
    name: 'Miguel Ángel Durán',
    userName: '@midudev',
    biographies:
      '👨‍💻 Ingeniero de Software & JavaScript ⭐ GitHub Star · Google Dev Expert · Microsoft MVP 🔴 Twitch Partner: http://twitch.tv/midudev 🗣️ Discord: http://discord.gg/midudev',
    verified: true,
    following: 783,
    followers: 199700,
    follow: false,
  },
  {
    profilePhoto:
      'https://pbs.twimg.com/profile_images/1644401400166903809/gjZU9AfL_400x400.jpg',
    name: '리노참치Rinotuna',
    userName: '@rinotuna',
    biographies: '그림그립니다 rinotuna@naver.com',
    verified: true,
    following: 109,
    followers: 626300,
    follow: false,
  },
  {
    profilePhoto:
      'https://pbs.twimg.com/profile_images/1666075932057296896/jOJ0tKE3_400x400.jpg',
    name: 'Crunchyroll',
    userName: '@Crunchyroll',
    biographies:
      '✨ Welcome to the official account for Crunchyroll✨ Bringing you the latest & greatest anime at the speed of Japan ~ !',
    verified: true,
    following: 595,
    followers: 8000000,
    follow: false,
  },
  {
    profilePhoto:
      'https://pbs.twimg.com/profile_images/613608325171654656/ttU8lJZd_400x400.jpg',
    name: '吉富昭仁',
    userName: '@yoshi_akihito',
    biographies:
      '漫画家の吉富昭仁と申します。 「ローンナイト」「EAT-MAN」「RAY」「BLUE DROP」「地球の放課後」「スクール人魚」「バランスポリシー」「しまいずむ」等を描いております。 動画展示場 https://youtube.com/channel/UCeySBnV71dyC-gwqapq9NwQ',
    verified: true,
    following: 2237,
    followers: 63100,
    follow: false,
  },
];
