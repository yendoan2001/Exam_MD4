declare class StaffController {
    index(req: any, res: any, next: any): Promise<void>;
    showCreateForm(req: any, res: any, next: any): Promise<void>;
    store(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any, next: any): Promise<void>;
    showUpdateForm(req: any, res: any, next: any): Promise<void>;
    update(req: any, res: any, next: any): Promise<void>;
    showStaffDetails(req: any, res: any, next: any): Promise<void>;
    filterByBranches(req: any, res: any): Promise<void>;
}
export default StaffController;
