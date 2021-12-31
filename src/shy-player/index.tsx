import { memo } from 'react';
import './iconfont/index.less'
import './index.less'
import ProgressBar from './ProgressBar';
import SongInfo from './SongInfo';
import OperationBar from './OperationBar';
import LyricsDisplay from './LyricsDisplay';
export default memo(function ShyPlayer() {
  return (
    <div className="shy-player">
      <div className="player-left">
      </div>
      <div className="player-right">
        <SongInfo songName="Burning" singer="Various Artists"></SongInfo>
        <LyricsDisplay></LyricsDisplay>
        <ProgressBar> </ProgressBar>
        <OperationBar></OperationBar>
      </div>
    </div>
  )
})
