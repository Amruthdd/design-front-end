#include<stdio.h>

int main()
{
	int i,j,no_pages,a[50],frame[10],no_frames,k,avail,count=0;
        printf("\n Enter No.of Pages:");
	scanf("%d",&no_pages);
        printf("\n Enter the ref String :\n");
        for(i=1;i<=no_pages;i++)
            scanf("%d",&a[i]);
        printf("\n Enter no.of Frames :");
        scanf("%d",&no_frames);
	for(i=0;i<no_frames;i++)
      frame[i]= -1;
  j=0;
	for(i=1;i<=no_pages;i++)
  {
      avail=0;
      for(k=0;k<no_frames;k++)
		    if(frame[k]==a[i])
            avail=1;
      if (avail==0)
        {
            frame[j]=a[i];
            j=(j+1)%no_frames;
            count++;
		    }
      for(k=0;k<no_frames;k++)
          printf("%d\t",frame[k]);
        printf("\n");
  }
  printf("Page Fault Is %d",count);
  return 0;
}
