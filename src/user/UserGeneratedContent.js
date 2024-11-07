// src/user/UserGeneratedContent.js

class UserGeneratedContent {
    constructor(userId) {
        this.userId = userId;
        this.content = [];
    }

    async loadContent() {
        // Simulate an API call to load user-generated content
        const response = await fetch(`/api/users/${this.userId}/content`);
        if (response.ok) {
            this.content = await response.json();
            console.log('User -generated content loaded:', this.content);
        } else {
            console.error('Failed to load content:', response.statusText);
        }
    }

    async addContent(newContent) {
        // Simulate an API call to add new user-generated content
        const response = await fetch(`/api/users/${this.userId}/content`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContent),
        });

        if (response.ok) {
            const createdContent = await response.json();
            this.content.push(createdContent);
            console.log('Content added:', createdContent);
        } else {
            console.error('Failed to add content:', response.statusText);
        }
    }

    async deleteContent(contentId) {
        // Simulate an API call to delete user-generated content
        const response = await fetch(`/api/users/${this.userId}/content/${contentId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            this.content = this.content.filter(item => item.id !== contentId);
            console.log('Content deleted:', contentId);
        } else {
            console.error('Failed to delete content:', response.statusText);
        }
    }

    getContent() {
        return this.content;
    }
}

export default UserGeneratedContent;
