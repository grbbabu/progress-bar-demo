var progressRactive;

(function(){
    'use strict';

    progressRactive = new Ractive({
        el: '#progressContainer',
        template: '#progressTemplate',
        data: {
            selectedProgressBar: 0,
            progressBars: [
                { currentValue: 25, isValid: true },
                { currentValue: 50, isValid: true },
                { currentValue: 75, isValid: true }
            ],
            progressBarButtons: [
                { value: "-25" },
                { value: "-10" },
                { value: "+10" },
                { value: "+25" }
            ]
        },
        isValidProgressBar: function(value, index) {
            if (value > 100) {
                this.set("progressBars." + index + ".isValid", false);
            } else {
                this.set("progressBars." + index + ".isValid", true);
            }
        },
        oninit: function() {
            this.get("progressBars").forEach(function(elem, index) {
                this.isValidProgressBar(elem.currentValue, index);
            }.bind(this));
        },
        updateProgressBar: function(event, valueToAdd) {
            var index = this.get("selectedProgressBar");
            var newValue = this.get("progressBars." + index + ".currentValue") + valueToAdd;
            if (newValue < 0){
                newValue = 0;
            }
            this.set("progressBars." + index + ".currentValue", newValue);
            this.isValidProgressBar(newValue, index);
        }
    });

    progressRactive.on({
        updateProgressBar: function(event, valueToAdd) {
            this.updateProgressBar(event, valueToAdd);
        }
    });
}());


