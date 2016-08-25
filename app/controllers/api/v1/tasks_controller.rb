module Api
 module V1
  class TasksController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def index
      respond_with(Task.all)
    end

    def show
      respond_with(Task.find(params[:id]))
    end

    def create
      @task = Task.new(task_params)
      if @task.save
        respond_to do |format|
          format.json {render :json => @task}
        end
      end
    end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      respond_to do |format|
        format.json {render :json => @task}
      end
    end
  end

  def destroy
    respond_with  Task.destroy(params[:id])
  end

  private
    def task_params
      params.require(:task).permit(:title, :description, :due_date, :status)
    end

  end
end
end




