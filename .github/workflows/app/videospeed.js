
    if (iframe.id == null) {
      alert("Error: Could not find the Youtube iframe.");
      return;
    }

    else {
      let player = opener.YT.get(iframe.id);
      let events;
      //search for attribute that stores yt event listeners
      for (let key of Object.keys(player)) {
        let item = player[key];
        if (item && Array.isArray(item.h)) {
          events = item.h;

    let player = opener.YT.get(iframe.id);
    let events;
    //search for attribute that stores yt event listeners
    for (let key in player) {
      let item = player[key];
      if (item +"" != "[object Object]") continue;
      for (let key_2 in item) {
        let item_2 = item[key_2];

        if (Array.isArray(item_2) && typeof item_2[1] == "string" && item_2[1].startsWith("on")) {
          events = item[key_2];
          break;
        }
      }
      for (let i=1; i<events.length; i+=3) {
        let event = events[i];
        if (event == "onPlaybackRateChange") {
          events[i+1] = function(){};
        }
      if (events) break;
    }

    for (let i=1; i<events.length; i+=3) {
      let event = events[i];
      if (event == "onPlaybackRateChange") {
        //overwrite event listener with a blank function
        events[i+1] = function(){};
      }
      player.setPlaybackRate(speed);
    }
  }
