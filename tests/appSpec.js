describe("App.js should", function() {

    beforeEach(function() {
        progressRactive.set('progressBars.0.currentValue', 25);
        progressRactive.set('progressBars.0.isValid', true);
        progressRactive.set('progressBars.1.currentValue', 50);
        progressRactive.set('progressBars.1.isValid', true);
        progressRactive.set('progressBars.2.currentValue', 75);
        progressRactive.set('progressBars.2.isValid', true);
    });

    it('be loaded correctly.', function() {
        expect(progressRactive).not.toBe(null);
    });

    it('set progress bar 1 as the default.', function() {
        expect(progressRactive).not.toBe(null);
        expect(progressRactive.get('selectedProgressBar')).toBe(0);
    });

    it('set the initial progress bar percentages correctly.', function(){
        expect(progressRactive).not.toBe(null);
        expect(progressRactive.get('progressBars.0.currentValue')).toBe(25);
        expect(progressRactive.get('progressBars.1.currentValue')).toBe(50);
        expect(progressRactive.get('progressBars.2.currentValue')).toBe(75);
    });

    it('should set the validity of progress bars correctly on init.', function() {
        expect(progressRactive).not.toBe(null);
        progressRactive.set('progressBars.0.isValid', false);
        progressRactive.oninit();
        expect(progressRactive.get('progressBars.0.isValid')).toBe(true);
    });

    it('should return the validity of progressbar correctly.', function() {
        expect(progressRactive).not.toBe(null);
        progressRactive.isValidProgressBar(200, 0);
        expect(progressRactive.get('progressBars.0.isValid')).toBe(false);
        progressRactive.isValidProgressBar(100, 0);
        expect(progressRactive.get('progressBars.0.isValid')).toBe(true);
        progressRactive.isValidProgressBar(25, 0);
        expect(progressRactive.get('progressBars.0.isValid')).toBe(true);
    });

    it('should update the progress bar with correct percentage for values more than 100.', function() {
        expect(progressRactive).not.toBe(null);
        progressRactive.set('progressBars.0.isValid', false);
        progressRactive.set('progressBars.0.currentValue', 50);
        progressRactive.updateProgressBar(null, 100);
        expect(progressRactive.get('progressBars.0.isValid')).toBe(false);
        expect(progressRactive.get('progressBars.0.currentValue')).toBe(150);
    });

    it('should update the progress bar with correct percentage for values less 0.', function() {
        expect(progressRactive).not.toBe(null);
        progressRactive.set('progressBars.0.isValid', false);
        progressRactive.set('progressBars.0.currentValue', 50);
        progressRactive.updateProgressBar(null, -75);
        expect(progressRactive.get('progressBars.0.isValid')).toBe(true);
        expect(progressRactive.get('progressBars.0.currentValue')).toBe(0);
    });

    it('should update the progress bar with correct percentage for values between 0 and 100.', function() {
        expect(progressRactive).not.toBe(null);
        progressRactive.set('progressBars.0.isValid', false);
        progressRactive.set('progressBars.0.currentValue', 50);
        progressRactive.updateProgressBar(null, 25);
        expect(progressRactive.get('progressBars.0.isValid')).toBe(true);
        expect(progressRactive.get('progressBars.0.currentValue')).toBe(75);
    });
});
