export interface JobData {
    mode: string,
    title: string,
    country: string,
    jobDescription: string,
    generalRequirements: string,
    generalAssignments: string,
    company: {
        name: string,
        website: string,
        imagePath: string,
        largeImagePath: string
    },
    requirements: [{
        description: string
    }],
    creationDate: string
}