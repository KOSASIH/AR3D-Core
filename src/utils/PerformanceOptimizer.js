// src/utils/PerformanceOptimizer.js

class PerformanceOptimizer {
    constructor() {
        this.performanceData = [];
    }

    startTracking(label) {
        if (performance) {
            performance.mark(`${label}-start`);
        }
    }

    stopTracking(label) {
        if (performance) {
            performance.mark(`${label}-end`);
            performance.measure(label, `${label}-start`, `${label}-end`);
            const measure = performance.getEntriesByName(label)[0];
            this.performanceData.push({
                label: label,
                duration: measure.duration,
            });
            performance.clearMarks(`${label}-start`);
            performance.clearMarks(`${label}-end`);
            performance.clearMeasures(label);
        }
    }

    logPerformanceData() {
        console.table(this.performanceData);
    }

    optimizeResourceLoading() {
        // Implement resource loading optimization strategies
        // For example, lazy loading images or components
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.onload = () => img.removeAttribute('data-src');
        });
    }
}

const performanceOptimizer = new PerformanceOptimizer();
export default performanceOptimizer;
