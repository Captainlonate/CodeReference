/*
    A playlist is considered a repeating playlist if any of the songs contain a
    reference to a previous song in the playlist.
    
    Otherwise, the playlist will end with the last song which points to undefined.
    
    Implement the method isRepeatingPlaylist that, efficiently with respect
    to time used, returns true if a playlist is repeating or false if it is not.

    Example, the following code prints "true" as both songs point to each other.
        let first = new Song("Hello");
        let second = new Song("Eye of the tiger");
        first.nextSong = second;
        second.nextSong = first;
        console.log(first.isRepeatingPlaylist()); // true
 */

class Song {
    name;
    nextSong;

    constructor(name) {
        this.name = name;
    }

    /**
     * Implement this function.
     * 10,000,000 Songs in playlist
     * Two pointers should take about 150ms
     * Lookup table (Map Set) should take about 4.5 seconds
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isRepeatingPlaylist() {
        // TODO: Implement
        
        return false
    }
}

// =======================Setup============================

// Generate the playlist
const playlist = []
const numberOfSongs = 10_000_000
console.log(`Creating playlist and ${numberOfSongs.toLocaleString('en-US')} songs. (Does not count toward time)`)
for (let idx = 0; idx < numberOfSongs; idx++) {
    playlist.push(new Song(`Song ${idx}`))
    if (idx > 0) {
        playlist[idx - 1].nextSong = playlist[idx]
    }
}

// Make the playlist repeat by pointing last element to the first
playlist[playlist.length - 1].nextSong = playlist[0]

// ========================Execute the Test================

console.log('Starting to check the playlist now...')
const startTime = performance.now()
console.log('Is repeating? ==', playlist[3].isRepeatingPlaylist());
const doneTime = performance.now() - startTime

console.log(`Took ${doneTime.toFixed(3)}ms to check playlist of ${numberOfSongs.toLocaleString('en-US')} songs.`)