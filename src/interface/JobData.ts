export interface JobData {
    mode: string,
    title: string,
    country: string,
    description: string,
    generalRequirements: string,
    generalAssignments: string,
    company: {
        name: string,
        website: string,
        imagePath: string,
        largeImagePath: string
    },
    creationDate: string
}