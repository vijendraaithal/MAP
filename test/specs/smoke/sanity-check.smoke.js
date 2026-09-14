describe('Sanity Check - App Launch', () => {
    it('should launch the app and land on a screen', async () => {
        // If we get here without throwing, Appium successfully:
        // 1. Started a UiAutomator2 session
        // 2. Installed the APK onto the emulator
        // 3. Launched the app
        const pageSource = await driver.getPageSource();
        console.log('Page source length:', pageSource.length);

        expect(pageSource.length).toBeGreaterThan(0);
    });
});