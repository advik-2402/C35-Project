class Form {
    constructor() {
        // create title
        this.title = createElement('h1');

        // create the detailInfo form
        this.input = select("#nameInput");
        this.email = select("#emailInput");
        this.class = select("#classInput");
        this.section = select("#sectionInput");
        this.roll = select("#rollInput");

        // create the heading of the form
        this.text = createElement('h1', "Here's a short survey on our school's functioning!");

        //create the questions and answers 

        //Question1         
        this.question1 = createElement('h3', "1. Do you think that the school authority needs to build more buildings in order to accomodate every student from Class-I to Class-XII?");
        this.greeting1 = createElement('h4', "Your Answer:");
        this.answer1 = createInput();

        //Question2
        this.question2 = createElement('h3', "2. Do you think that the washrooms should be more frequently cleaned?");
        this.greeting2 = createElement('h4', "Your Answer:");
        this.answer2 = createInput();

        //Question3
        this.question3 = createElement('h3', "3. Do you think that the doors of the washrooms or classrooms should be fixed?");
        this.greeting3 = createElement('h4', "Your Answer:");
        this.answer3 = createInput();

        //Question4
        this.question4 = createElement('h3', "4. Do you think that the newly joined teachers should be thoroughly interviewed?");
        this.greeting4 = createElement('h4', "Your Answer:");
        this.answer4 = createInput();

        //Question5
        this.question5 = createElement('h3', "5. Should there be a regular check up of all the electrical equipments (fans,lights,computers,etc) of the classroom and computer lab?");
        this.greeting5 = createElement('h4', "Your Answer:");
        this.answer5 = createInput();

        //Question6
        this.question6 = createElement('h3', "6. Should the school authority open a channel for contact which would include school's e-mail, phone number and other details for contacting?");
        this.greeting6 = createElement('h4', "Your Answer:");
        this.answer6 = createInput();
    
        // create the submit button
        this.button1 = createButton('Submit');

        // create the vote button
        this.button2 = createButton('Vote');

        // greet the voter
        this.greeting = createElement('h3');
    }

    hide() {
        // hide the detail info input
        this.input.hide();
        this.email.hide();
        this.class.hide();
        this.section.hide();
        this.roll.hide();

        // hide the questions
        this.question1.hide();
        this.question2.hide();
        this.question3.hide();
        this.question4.hide();
        this.question5.hide();
        this.question6.hide();

        // hide the answer titles
        this.greeting1.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.greeting4.hide();
        this.greeting5.hide();
        this.greeting6.hide();

        // hide the answer inputs
        this.answer1.hide();
        this.answer2.hide();
        this.answer3.hide();
        this.answer4.hide();
        this.answer5.hide();
        this.answer6.hide();

        // hide the buttons
        this.button1.hide();
        this.button2.hide();

        this.text.html("Thank you for voting! The votes are valuable for us, and have been added to our system");

    }

    display() {
        // position the title
        this.title.html("School Development Vote");
        this.title.position(500, 0);

        // position the submit button
        this.button1.position(650, 160);

        this.button1.mousePressed(() => {
            vote.updateState(1);
            voter.name = this.input.value();
            voter.email = this.email.value();
            voter.class = this.class.value();
            voter.section = this.section.value();
            voter.roll = this.roll.value();
            voterCount += 1;
            voter.index = voterCount
            voter.updateCount(voterCount);
            voter.update();
        })

        // position the vote button
        this.button2.position(10,1250);

        this.button2.mousePressed(() => {
            if (voteState === 0) {
                voter.name = this.input.value();
                voter.email = this.email.value();
                voter.class = this.class.value();
                voter.section = this.section.value();
                voter.roll = this.roll.value();
                voterCount += 1;
                voter.index = voterCount
                voter.updateCount(voterCount);
                voter.update();
            }
            var ans1 = this.answer1.value();
            var ans2 = this.answer2.value();
            var ans3 = this.answer3.value();
            var ans4 = this.answer4.value();
            var ans5 = this.answer5.value();
            var ans6 = this.answer6.value();
            answer.push(ans1, ans2, ans3, ans4, ans5, ans6);
            voter.updateResult(answer);
            vote.updateState(0);
            this.hide();
        })
    }
}
