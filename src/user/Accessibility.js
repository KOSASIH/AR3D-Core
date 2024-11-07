// src/user/Accessibility.js

class Accessibility {
    constructor() {
        this.settings = {
            textSize: 'medium', // Options: small, medium, large
            highContrast: false,
            screenReader: false,
        };
    }

    setTextSize(size) {
        if (['small', 'medium', 'large'].includes(size)) {
            this.settings.textSize = size;
            document.body.style.fontSize = this.getFontSize(size);
            console.log(`Text size set to: ${size}`);
        } else {
            console.error('Invalid text size:', size);
        }
    }

    getFontSize(size) {
        switch (size) {
            case 'small':
                return '12px';
            case 'medium':
                return '16px';
            case 'large':
                return '20px';
            default:
                return '16px';
        }
    }

    toggleHighContrast() {
        this.settings.highContrast = !this.settings.highContrast;
        document.body.classList.toggle('high-contrast', this.settings.highContrast);
        console.log(`High contrast mode: ${this.settings.highContrast ? 'Enabled' : 'Disabled'}`);
    }

    toggleScreenReader() {
        this.settings.screenReader = !this.settings.screenReader;
        console.log(`Screen reader mode: ${this.settings.screenReader ? 'Enabled' : ' Disabled'}`);
    }

    getSettings() {
        return this.settings;
    }
}

export default Accessibility;
