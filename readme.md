# Project MPC Hub
## Current Version: v0.0
**A desktop application to assist you in your personal life. Starting with the ideal music player.**

## Music Player RoadMap
### v1.0
- [ ] Track list population from local directory
    - [ ] Title parsing
        - [ ] Basic parsing
        - [ ] Tested for edge cases
    - [ ] Assemble track file meta-data
        - [ ] Track Art (online-first and default fallback)
        - [ ] Manually change, remove track art
    - [ ] Alphabatize track list by default
    - [ ] re-order tracks
    - [ ] implement track options
        - [ ] rename
        - [ ] Edit Track's tags, 
        - [ ] Delete track (locally and globally)
    - [ ] Search active tracklist (artist, track title)
        - [ ] Editing or playing results (when playing, if result is not in active tracklist, it will show in playnow, but will be present in tracklist once results ui is escaped.)
    - [ ] Tracklist statistics (tags, tracks, playtime)
- [ ] Tag System
    - [ ] View tags menu, create, delete, update tags. 
    - [ ] Tracklist display modes using tags
    - [ ] Search tags from tags menu
- [ ] Track playback control
    - [ ] Play, pause, skip tracks; sync seeker & timecodes 
    - [ ] Loop and shuffle active track and tracklist
    - [ ] Seeking tracks using seeker and timecode.
    - [ ]   
- [ ] Audio Controls
    - [ ] Volume controls
- [ ] Menu bar
    - [ ] Home menu 
    - [ ] Settings menu
- [ ] Shortcuts 
    - [ ] Play, pause, next, previous (compatible with keyboard function keys as well)

## Future Plans
- Media API implementation for OS playback controls and data
- Auto add genre tags using online APIs/sources
- Located and track more Meta data(date published, album, duration, listens)
- Chorus-Verse volume preferences (consitent volume, louder chorus)
- Docker Repositioning (Very far future)
- Custom Theming
- Gap-less playback
- Limiter controls
- Playback Speed implementation
- Waveform track seeker
- Smart Auto Mixer (Personal favourite future idea)
    - transitional playback; fading between tracks
    - playback order determined by various heuristics (key, mood/tags, tempo, desktop activity, weather, location etc.)
- Different tracklist views
- Connecting YT, spotify, soundcloud playlists (if possible, as best as possible)

**Feedback is more than welcome!**
