declare class CarController {
    index(req: any, res: any, next: any): Promise<void>;
    showCreateForm(req: any, res: any, next: any): Promise<void>;
    store(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any, next: any): Promise<void>;
    showUpdateForm(req: any, res: any, next: any): Promise<void>;
    update(req: any, res: any, next: any): Promise<void>;
    showCarDetails(req: any, res: any, next: any): Promise<void>;
}
export default CarController;
