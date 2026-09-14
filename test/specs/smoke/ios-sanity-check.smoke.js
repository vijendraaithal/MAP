describe('iOS Sanity Check - App Launch', () => {
    it('should launch the app and land on a screen', async () => {
        const pageSource = await driver.getPageSource();
        console.log('Page source length:', pageSource.length);
        expect(pageSource.length).toBeGreaterThan(0);
    });
});