export const getValidPage = (page: number): number => {
    if (!Number.isInteger(page) || page < 1) {
        return 1;
    }
    return page;
}
