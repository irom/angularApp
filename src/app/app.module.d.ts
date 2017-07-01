import { ApplicationRef } from '@angular/core';
export declare class AppModule {
    appRef: ApplicationRef;
    constructor(appRef: ApplicationRef);
    hmrOnInit(store: any): void;
    hmrOnDestroy(store: any): void;
    hmrAfterDestroy(store: any): void;
}
