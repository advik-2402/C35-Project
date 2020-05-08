class Voter {
    constructor() {
        this.index = 0;
        this.name = null;
        this.email = null;
        this.class = null;
        this.section = null;
        this.roll = null
    }

    getCount() {
        var countRef = database.ref("voterCount");
        countRef.on("value", (data) => {
            voterCount = data.val();
        });
    }

    updateResult(result) {
        database.ref("voters/voter" + this.index + "/").update({
            answers: result
        })
    }

    updateCount(count) {
        database.ref("/").update({
            voterCount: count
        })
    }

    update() {
        voterIndex = "voters/voter" + this.index;
        database.ref(voterIndex).set({
            name: this.name,
            email: this.email,
            class: this.class,
            section: this.section,
            roll: this.roll
        })
    }


}