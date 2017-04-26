export const types = {
  CREATE_NEW_SOUND_INSTANCE: 'CREATE_NEW_SOUND_INSTANCE',
  DECREASE_SPEED: 'DECREASE_SPEED',
  INCREASE_SPEED: 'INCREASE_SPEED',
  SET_MODAL_VISIBLE: 'SET_MODAL_VISIBLE',
  SET_FULL_SIZE_MODAL_VISIBLE: 'SET_FULL_SIZE_MODAL_VISIBLE',
  SET_PLAY_STATUS: 'SET_PLAY_STATUS',
  STORE_EPISODE_DATA: 'STORE_EPISODE_DATA',
  STORE_TIMER: 'STORE_TIMER',
  UPDATE_CURRENT_EPISODE_ID: 'UPDATE_CURRENT_EPISODE_ID',
  UPDATE_CURRENT_PLAYING_TIME: 'UPDATE_CURRENT_PLAYING_TIME',
  UPDATE_CURRENTLY_PLAYING_EPISODE: 'UPDATE_CURRENTLY_PLAYING_EPISODE'
}

export const actionCreators = {
  createNewSoundInstance: (newSoundInstance) => {
    return {type: types.CREATE_NEW_SOUND_INSTANCE, payload: newSoundInstance}
  },
  decreaseSpeed: (speed) => {
    return {type: types.DECREASE_SPEED, payload: speed}
  },
  increaseSpeed: (speed) => {
    return {type: types.INCREASE_SPEED, payload: speed}
  },
  setFullSizeModalVisible: (boolean) => {
    return {type: types.SET_FULL_SIZE_MODAL_VISIBLE, payload: boolean}
  },
  setModalVisible: (boolean) => {
    return {type: types.SET_MODAL_VISIBLE, payload: boolean}
  },
  setPlayStatus: (boolean) => {
    return {type: types.SET_PLAY_STATUS, payload: boolean}
  },
  storeEpisodeData: (episode) => {
    return {type: types.STORE_EPISODE_DATA, payload: episode}
  },
  storeTimer: (timer) => {
    return {type: types.STORE_TIMER, payload: timer}
  },
  updateCurrentEpisodeId: (episodeId) => {
    return {type: types.UPDATE_CURRENT_EPISODE_ID, payload: episodeId}
  },
  updateCurrentPlayingTime: (time) => {
    return {type: types.UPDATE_CURRENT_PLAYING_TIME, payload: time}
  },
  updateCurrentlyPlayingEpisode: (episodeTitle) => {
    return {type: types.UPDATE_CURRENTLY_PLAYING_EPISODE, payload: episodeTitle}
  }
}
