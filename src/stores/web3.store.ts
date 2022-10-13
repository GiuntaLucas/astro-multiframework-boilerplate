import { BehaviorSubject, EMPTY, from, Observable, of, switchMap, tap } from "rxjs";
import { detectEthereumProvider, MetaMaskEthereumProvider } from "../detect-provider";

const currentAccountSubject: BehaviorSubject<any> = new BehaviorSubject([]);
const currentAccount$: Observable<any> = currentAccountSubject.asObservable();

function connectWallet(): Observable<any> {
    return from(detectEthereumProvider()).pipe(
        switchMap((provider: any) => {
          if (provider) {
            return from(provider.request({ method: 'eth_requestAccounts' })) as Observable<string[]>;
          }
          return EMPTY;
        }),
        tap((accounts: string[]) => currentAccountSubject.next(accounts)),
      );
}


function accountChanged(provider: MetaMaskEthereumProvider): void {
    provider.on('accountsChanged', (accounts: string[]) => {
      console.log('accountsChanged', accounts);
      currentAccountSubject.next([...accounts]);
    });
  }

function networkChanged(provider: any): void {
    provider.on('networkChanged', (networkId: string) => { });
}

function checkWalletConnected(provider: MetaMaskEthereumProvider): Observable<any> {
    return of(provider).pipe(
      switchMap((provider) => {
        return from(provider.request({ method: 'eth_accounts' })) as Observable<string[]>;
      }),
      tap((accounts: string[]) => currentAccountSubject.next(accounts)),
    );
  }

function isConnected(): Observable<any> {
    return from(detectEthereumProvider()).pipe(
        switchMap((provider) => (provider ? of(provider) : EMPTY)),
        tap((provider) => accountChanged(provider)),
        tap((provider) => networkChanged(provider)),
        switchMap((provider) => checkWalletConnected(provider))
    );
  }
export const web3 = {
    currentAccount$, 
    connectWallet,
    isConnected
}

  
