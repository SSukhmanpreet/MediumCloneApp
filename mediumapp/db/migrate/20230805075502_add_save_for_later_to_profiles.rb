class AddSaveForLaterToProfiles < ActiveRecord::Migration[7.0]
  def change
    add_column :profiles, :save_for_later, :integer, array: true, default: []
  end
end
