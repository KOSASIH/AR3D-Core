// src/user/UserProfile.js

class UserProfile {
    constructor(userId) {
        this.userId = userId;
        this.profileData = {
            username: '',
            email: '',
            bio: '',
            profilePicture: '',
            preferences: {},
        };
    }

    async loadProfile() {
        // Simulate an API call to load user profile data
        const response = await fetch(`/api/users/${this.userId}`);
        if (response.ok) {
            this.profileData = await response.json();
            console.log('Profile loaded:', this.profileData);
        } else {
            console.error('Failed to load profile:', response.statusText);
        }
    }

    async updateProfile(updatedData) {
        // Simulate an API call to update user profile data
        const response = await fetch(`/api/users/${this.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (response.ok) {
            this.profileData = { ...this.profileData, ...updatedData };
            console.log('Profile updated:', this.profileData);
        } else {
            console.error('Failed to update profile:', response.statusText);
        }
    }

    getProfileData() {
        return this.profileData;
    }
}

export default UserProfile;
