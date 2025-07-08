const trackListContainer = document.getElementById("track-list");

function createField(text) {
    const trackField = document.createElement("p");
    trackField.className = "list-item-field";

    trackField.innerText = text;
    return trackField;
}

function createTrackTile(trackInfo) {
    /* 
    //Intended DOM structure of the track tile: 
    var trackTile = `<div class="list-item">
        <p class="list-item-field">${name}</p>
        <p class="list-item-field">${artist}</p>
        <p class="list-item-field">${genres.join(",")}</p>
        <p class="list-item-field">${tags.join(",")}</p>
    </div>`;
    */
    const {artist, genres, name, tags} = trackInfo;

    const trackTileDiv = document.createElement("div");
    trackTileDiv.className = "list-item";
    
    trackTileDiv.append(createField(name));
    trackTileDiv.append(createField(artist));
    trackTileDiv.append(createField(genres.join(", ")));
    trackTileDiv.append(createField(tags.join(", ")));

    trackListContainer.append(trackTileDiv);
}

function updateTrackUI (trackData) {
    trackData.forEach(createTrackTile);
}

window.electronAPI.onLoadTrackData(updateTrackUI);





