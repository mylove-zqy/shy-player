import { defualtState } from '../types/index'

const state: defualtState = {
    currentTime: 10,
    totalTime: 100,
    currentSong: null,//当前歌曲
    songList: [],//歌单
    hiddenSongList: false,//
    isPlaying: false,//默认没有播放
    currentSongIndex: 0
}

export default state