import { BrowserModule } from '@ali/ide-core-browser';
import { QuickOpenClientContribution } from './quick-open.contribution';
import { PrefixQuickOpenServiceImpl, QuickOpenContribution } from './prefix-quick-open.service';
import { PrefixQuickOpenService, QuickPickService } from './quick-open.model';
import { QuickPickServiceImpl } from './quick-pick.service';
import { Injectable } from '@ali/common-di';

@Injectable()
export class QuickOpenModule extends BrowserModule {
  providers = [
    QuickOpenClientContribution,
    {
      token: PrefixQuickOpenService,
      useClass: PrefixQuickOpenServiceImpl,
    },
    {
      token: QuickPickService,
      useClass: QuickPickServiceImpl,
    },
  ];
  contributionProvider = QuickOpenContribution;
}
