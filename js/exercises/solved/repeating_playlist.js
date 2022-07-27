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
     * Two pointers approach
     * 10,000,000 took about 150ms to check.
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isRepeatingPlaylist() {
        // If this is a repeating playlist, eventually the two song
        // pointers will overlap (point to same object)
        let currentSong = this
        let scouterSong = this
        // Use the slow & fast pointer algorithm
        // Fast pointer moves twice for every one move of slow pointer.
        // If the linked-list (song playlist) is circular, then eventually
        // the second pointer will match the first pointer
        while (scouterSong.nextSong && scouterSong.nextSong.nextSong) {
            // Move current song to next
            currentSong = currentSong.nextSong
            // Move scouterSong two times
            scouterSong = scouterSong.nextSong.nextSong
            //
            // console.log(`Comparing: [${currentSong.name}, ${scouterSong.name}]`)
            // if (currentSong === scouterSong) {
            if (currentSong.name === scouterSong.name) {
                return true
            }
        }

        // console.log(`Finished with: [${currentSong.name}, ${scouterSong.name}]`)

        return false
    }

    /*
        Lookup Table Approach
        10,000,000 took about 4.5 seconds for both Map and Set approaches
    */
    isRepeatingPlaylist2() {
        // The crappy version from online
        let currenSong = this;
        // Using object hung the app after about 8.3 million properties
        // Using Map finished in 4.8 sec (briefly paused at 8.3 million though)
        // Using Set finished faster, at 4.4 sec (briefly paused at 8.3 million though)
        let songCache = new Map()
        // let songCache = new Set()

        let iterationsCounter = 0
        while (currenSong !== undefined) {
            if (iterationsCounter % 1_000_000 === 0) {
                console.log(iterationsCounter)
            }
            iterationsCounter++

            // Map
            if (songCache.has(currenSong.name)) {
                return true
            }
            songCache.set(currenSong.name, true)
            // Set
            // if (songCache.has(currenSong.name)) {
            //     return true
            // }
            // songCache.add(currenSong.name)
            currenSong = currenSong.nextSong;
        }

        return false;
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